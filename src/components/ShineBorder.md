# ShineBorder Component

The ShineBorder component is an animated background border effect that adds a dynamic, eye-catching shine to any element.

## Installation

The component has already been added to your project. You can import it directly:

```tsx
import { ShineBorder } from "@/components/ShineBorder";
```

## Usage

### Basic Usage

```tsx
<ShineBorder>
  <div className="p-4 bg-gray-900 rounded-lg">
    Content with shine border
  </div>
</ShineBorder>
```

### Customizing the Border

```tsx
<ShineBorder 
  borderWidth={2} 
  duration={12} 
  shineColor="#7fe200"
  className="rounded-lg"
>
  <div className="p-4 bg-gray-900 rounded-lg">
    Customized shine border
  </div>
</ShineBorder>
```

### Multi-color Shine

```tsx
<ShineBorder 
  borderWidth={2} 
  duration={15} 
  shineColor={["#ff00aa", "#00a2ff", "#7fe200"]}
  className="rounded-lg"
>
  <div className="p-4 bg-gray-900 rounded-lg">
    Rainbow shine border
  </div>
</ShineBorder>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderWidth` | number | 1 | Width of the border in pixels |
| `duration` | number | 14 | Duration of the animation in seconds |
| `shineColor` | string or string[] | "#000000" | Color(s) of the border |
| `className` | string | undefined | Additional CSS classes |
| `style` | React.CSSProperties | undefined | Additional inline styles |
| `children` | React.ReactNode | required | Content to apply the shine border to |

## Examples in the Project

1. **Download Page**: The download cards now feature a green shine border effect with a 12-second duration for a sleek, sophisticated appearance
2. **Shine Demo Page**: Visit `/shine-demo` to see various examples of the shine border in action
3. **Combined Demo Page**: Visit `/combined-demo` to see all effects working together
4. **Animation Test Page**: Visit `/animation-test` to verify the animation is working

## Customization

You can customize the shine effect by modifying the CSS animation in `globals.css`:

```css
@keyframes shine {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  to {
    background-position: 0% 0%;
  }
}
```

## Recommended Animation Durations

For a sophisticated appearance:
- **Very Slow (12-15 seconds)**: Most elegant and subtle
- **Slow (8-12 seconds)**: Sleek and sophisticated
- **Medium (6-8 seconds)**: Balanced between elegance and visibility

The download cards use a 12-second duration for a sleek, sophisticated appearance.

## Troubleshooting

If you're not seeing the animation:

1. **Check the duration**: The default duration is 14 seconds, which might appear slow. Try setting a shorter duration (8-12 seconds) for a more noticeable yet sophisticated effect.

2. **Browser settings**: Some browsers have reduced motion settings that can disable animations. Check your browser's accessibility settings.

3. **CSS conflicts**: Ensure there are no CSS rules overriding the animation properties.

4. **Refresh the page**: Sometimes a simple refresh can resolve animation issues.

5. **Test page**: Visit `/animation-test` to verify the animation is working correctly with a simple example.

## Notes

- The shine effect works best on elements with a background color that contrasts with the shine color
- For best results, ensure the parent element has `position: relative` or wrap the ShineBorder in a positioned container
- The animation is automatically optimized for performance using `will-change` and CSS animation features
- The animation will work even with users who have reduced motion preferences enabled