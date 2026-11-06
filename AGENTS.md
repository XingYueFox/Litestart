# 项目约定

> **本文件是本项目的强制约定，在此仓库内工作的所有 AI 代理都必须遵守。**
>
> 动手前先读完本文档；与代码、注释、版本号有关的操作一律按此执行。
> 用户当次的具体指令与本文档冲突时，以当次指令为准，并在完成后说明冲突点。
> 本文档未覆盖的情况遵循三条原则：改动最小、不做未要求的变更、改完自检。

## 注释

只说明「当前是什么」。不写改动史、理由论证、主观评价、口语。

**不要写**

| 类型 | 例子 |
| --- | --- |
| 改动史 | 「原来是 X」「取代 Y」「原纯黑 #000000」 |
| 理由论证 | 「不用 X，因为…」「否则会…」「之所以…」 |
| 主观评价 | 「太弱」「看不清」「看得出是按钮」 |
| 口语 | 「这里」「顺手」「滚一下又弹回来」——改用书面语（「此处」） |
| 细节罗列 | 代码本身已能看出的状态值、属性清单 |

**可以写**

必要时用一句话说明结构约束，例如：

```css
/* 纯平风格：无描边，1px 透明边框占位以维持尺寸（content-box） */
```

**示例**

```css
/* 反例 */
/* 关闭态底色。不用 --btn-secondary-bg(#EEEEEE)：与页面背景 #f7f7f7 只差 9 级亮度，太弱 */

/* 正例 */
/* 关闭态底色 */
```

## 改注释的注意事项

行内注释与属性同行，**不能按整行替换**，否则会连属性一起删掉：

```css
--accent-foreground-rest: #262320;   /* 强调色 */
```

批量改注释后应校验变量数量与取值，避免静默丢失定义。

## 颜色系统

颜色分三层，改动时必须遵守。

**① CSS 变量**（`index.html` 的 `:root` 与 `:root[data-theme="dark"]`）

界面所有会被动态取色影响的颜色都定义为变量，浅色/深色各一套。写样式时只用 `var(--x)`，不要内联色值。

**② 动态取色映射**（`script.js` 的 `mdBuildVarText`）

开启动态取色后，上述变量由该函数按 Material 3 角色重新赋值。**新增颜色变量时必须同步在此映射**，否则开启取色后该处颜色不跟随。

映射用的角色要与变量语义对应：

| 用途 | 角色 |
| --- | --- |
| 页面底色 | `surface` |
| 卡片、浮层、弹窗底色 | `surfaceContainerLow` / `surfaceContainerHigh` |
| 悬停加深 | `surfaceContainerHigh` / `surfaceContainerHighest` |
| 文字 | `onSurface` / `onSurfaceVariant` |
| 描边 | `outlineVariant` / `outline` |
| 需要半透明叠加 | `c('onSurface') + <两位十六进制 alpha>` |

半透明叠加用 `c(角色) + 'XX'` 拼成 8 位色值，不要写成固定 `rgba()`，否则取色后不带配色色相。

**③ 允许内联硬编码的情形**

- 遮罩、阴影、光晕（`rgba(0, 0, 0, x)`）
- 与配色无关的黑白示意（如主题预览缩略图）
- 色板预设种子值（`data-seed`）
- 变量自身的默认值

除上述之外，任何界面颜色都不应内联 `rgba()` 或十六进制。

## 配色过渡

动态取色应用配色时，`script.js` 会给 `<html>` 加 `md-color-transition` 类，1.7 秒后移除。该类存在期间，`index.html` 顶部有两条联动规则：

**① 通用规则**

```css
html.md-color-transition, html.md-color-transition *, ... {
  transition: background-color 1.5s ease, ..., width 0.15s ease, ... !important;
}
```

颜色类属性（`background-color`、`color`、`border-color`、`fill`、`stroke`、`box-shadow`）走 1.5s，用于让整页配色平滑过渡；尺寸与位移类（`width`、`height`、`transform`、`opacity`、`border-radius`、`outline`）保持 0.15s。

**② 交互元素例外清单**

```css
html.md-color-transition :is(.quicklink-item, .btn-primary, .md-swatch, .switch, ...) { ... 0.08s ... }
```

因为 `transition` 无法"追加"只能整体覆盖，通用规则会把交互元素的悬停反馈也从 0.08s 拉到 1.5s。这份 `:is()` 清单内的元素用更高优先级把时长改回 0.08s。清单内同时包含 `transform`，用于开关手柄位移、色块缩放这类动效。

**③ 伪元素例外**

```css
html.md-color-transition .slider::before,
html.md-color-transition .md-swatch::after { ... 0.08s ... }
```

开关手柄（`.slider::before`）和色块选中圆点（`.md-swatch::after`）的状态变化画在伪元素上，`:is()` 无法覆盖伪元素，因此单列一条。

**维护要求**

新增任何带悬停或激活态颜色变化的交互元素（按钮、列表项、卡片、开关、色块、选项等）时，**必须**把它的类名追加到对应清单。状态由伪元素承担的，追加到伪元素清单。遗漏的后果是：该元素在配色切换后的 1.7 秒内，交互反馈会被拖慢到 1.5 秒。

清单是白名单，不是黑名单——没被列出的元素一律按 1.5s 处理。判断标准是"该元素是否有 `:hover` / `.active` 之类的状态会改变外观"。

## 版本号

`manifest.version` 只接受 1–4 段纯数字，带后缀会被商店拒绝，因此拆成两个字段：

```json
"version": "1.8.8",            // 纯数字，供安装与更新判断
"version_name": "1.8.8-Beta1"  // 展示用，可带后缀
```

其余位置统一带后缀（如 `1.8.8-Beta1`）：

| 位置 | 说明 |
| --- | --- |
| `script.js` 的 `APP_VERSION` | 一处 |
| `script.js` 五语种 `litever` | 含更新日期，日期取发布当天 |
| `index.html` 页脚 `LiteStart x.y.z` | 一处 |
| `index.html` 设置页版本行 | 与 `litever` 同格式 |

替换时注意：

- `index.html` 与 `script.js` 的 Logo `<path>` 数据里含形如 `1.8.1`、`1.8.2` 的绘图坐标，不能按版本号替换
- 逐文件断言出现次数后再替换，避免误伤
