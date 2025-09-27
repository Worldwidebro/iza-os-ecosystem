
# Design System Setup for Site Recreation


## ShadCN UI Setup


### Installation


```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input label
npx shadcn-ui@latest add table dialog dropdown-menu
npx shadcn-ui@latest add badge avatar progress tabs

```text


### Core Components



- **Button**: Primary, secondary, ghost, outline variants

- **Card**: Container for content with header, body, footer

- **Input**: Form inputs with validation and states

- **Table**: Data tables with sorting and filtering

- **Dialog**: Modal dialogs and overlays

- **Badge**: Status indicators and labels

- **Avatar**: User profile images

- **Progress**: Loading and progress indicators

- **Tabs**: Tabbed navigation and content

### Theme Configuration


```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
}

```text


## TweakCN Setup


### Installation


```bash
npm install @tweakcn/ui

```text


### Advanced Components



- **DataGrid**: Advanced data tables with filtering

- **Charts**: Data visualization components

- **Forms**: Complex form builders

- **Dashboard**: Dashboard layout components

- **Navigation**: Advanced navigation systems

### Configuration


```typescript
// tweakcn.config.js
export default {
  theme: {
    primary: "#667eea",
    secondary: "#764ba2",
    accent: "#f093fb",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#1a202c",
  },
  components: {
    button: {
      variants: ["primary", "secondary", "ghost", "outline"],
      sizes: ["sm", "md", "lg", "xl"],
    },
    card: {
      variants: ["default", "elevated", "outlined"],
    },
  },
}

```text


## Hero UI Setup


### Installation


```bash
npm install @heroicons/react @headlessui/react

```text


### Hero Components



- **Icons**: Comprehensive icon library

- **Animations**: Smooth animations and transitions

- **Layouts**: Responsive layout components

- **Interactive**: Interactive UI components

### Usage


```typescript
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  BellIcon,
  SearchIcon
} from '@heroicons/react/24/outline'

// Use icons in components
<HomeIcon className="h-6 w-6" />

```text


## Integration with Claude Agents


### UI/UX Agent Integration


```typescript
class UIUXAgent {
  async generateComponent(requirements: ProjectRequirements) {
    const design = await this.createDesign(requirements);
    const component = await this.generateShadCNComponent(design);
    const tweakcnEnhancement = await this.enhanceWithTweakCN(component);
    const heroUI = await this.addHeroUIElements(tweakcnEnhancement);

    return heroUI;
  }
}

```text


### Design System Selection Logic


```typescript
function selectDesignSystem(projectType: string): DesignSystem[] {
  switch (projectType) {
    case 'dashboard':
      return ['ShadCN', 'TweakCN'];
    case 'marketing':
      return ['ShadCN', 'Hero UI'];
    case 'ecommerce':
      return ['ShadCN', 'TweakCN', 'Hero UI'];
    case 'admin':
      return ['ShadCN', 'TweakCN'];
    default:
      return ['ShadCN'];
  }
}

```text

