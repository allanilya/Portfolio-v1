# Portfolio Components Guide

This guide explains what each component does and how to customize them.

## 📁 Component Overview

### 1. **Hero.tsx** - Landing Section
**Location:** `/components/Hero.tsx`

**What it shows:**
- Your profile photo (circular)
- Name in large gradient text
- Professional title
- Social media links (LinkedIn, GitHub, Resume)
- Scroll indicator

**How to customize:**

**Profile Photo:**
- **Size:** Change `w-70 h-70` on line 40
  - Options: `w-32 h-32` (small) → `w-80 h-80` (huge)
- **Zoom:** Change `scale(1)` on line 78
  - `scale(1.2)` = zoom in 20%
  - `scale(0.8)` = zoom out 20%
- **Position:** Change `objectPosition: '10% 10%'` on line 79
  - **Move LEFT:** Use SMALLER first number (e.g., `'0% 50%'`)
  - **Move RIGHT:** Use LARGER first number (e.g., `'80% 50%'`)
  - **Move UP:** Use SMALLER second number (e.g., `'50% 0%'`)
  - **Move DOWN:** Use LARGER second number (e.g., `'50% 80%'`)

**Name & Title:**
- Line 87: Change "ALLAN ILYASOV"
- Line 92: Change "AI/ML Engineer & Full-Stack Developer"

**Colors:**
- Gradient: Change `blue-600` and `purple-600` to other Tailwind colors

---

### 2. **About.tsx** - Biography Section
**Location:** `/components/About.tsx`

**What it shows:**
- "About Me" heading
- 2-3 paragraphs about your background

**How to customize:**
- **Edit text:** Lines 29-45, modify the paragraph content
- **Add paragraph:** Copy a `<p>` tag structure
- **Text size:** Change `text-lg` to `text-base` (smaller) or `text-xl` (larger)
- **Card padding:** Change `p-8` to `p-6` (less) or `p-10` (more)

---

### 3. **Skills.tsx** - Technical Skills Grid
**Location:** `/components/Skills.tsx`

**What it shows:**
- Grid of skill category cards
- Each card contains skill tags

**How to customize:**

**Add a new category:**
```typescript
{
  title: "Your Category Name",
  skills: ["Skill1", "Skill2", "Skill3"]
}
```

**Edit skills:**
- Lines 26-53: Modify the skills arrays

**Change layout:**
- Line 77: `grid-cols-3` = 3 columns on desktop
  - Change to `grid-cols-2` (2 columns) or `grid-cols-4` (4 columns)

**Colors:**
- Category titles: Change `text-blue-600` on line 62

---

### 4. **Projects.tsx** - Project Carousel
**Location:** `/components/Projects.tsx`

**What it shows:**
- Carousel with left/right arrows
- Project cards (click to expand)
- Modal with full project details

**How to customize:**
- **Add projects:** Edit `/lib/projects.ts` (NOT this file)
- **Change visible cards:** Line 77, change `grid-cols-3`
- **Card colors:** Edit `bg-white` and `dark:bg-gray-800`
- **Tech tag colors:** Line 92, change `bg-blue-100`

**Project data is in `/lib/projects.ts`** - see below

---

### 5. **DarkModeToggle.tsx** - Theme Switcher
**Location:** `/components/DarkModeToggle.tsx`

**What it shows:**
- Floating button in top-right corner
- Toggles between light/dark mode

**How to customize:**
- **Move position:** Line 52, change `top-4 right-4`
  - `top-4` = 16px from top
  - `right-4` = 16px from right
  - Can use `bottom-4`, `left-4`
- **Change size:** Modify `p-3` and `w-6 h-6`
- **Remove:** Delete file and remove `<DarkModeToggle />` from `page.tsx`

---

## 📊 Adding/Editing Projects

**File:** `/lib/projects.ts`

### Format:
```typescript
{
  id: 2,                    // Unique number
  title: "Project Name",    // Project title
  description: "...",       // Full description
  techStack: ["React", "Node.js", "AWS"],  // Technologies used
  githubUrl: "https://github.com/username/repo",  // Required
  liveUrl: "https://yoursite.com"  // Optional
}
```

### Example:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Codify AI",
    description: "AI-powered programming tutor...",
    techStack: ["React", "AWS Bedrock", "Flask"],
    githubUrl: "https://github.com/allanilya/codify-ai",
    liveUrl: "https://codifyai.org"
  },
  {
    id: 2,
    title: "Your New Project",
    description: "Description here...",
    techStack: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/username/project"
  }
];
```

---

## 🎨 Common Customizations

### Changing Colors
All components use Tailwind CSS colors. Common patterns:
- `bg-blue-600` = background color
- `text-blue-600` = text color
- `dark:bg-gray-800` = dark mode background

**Color options:** `gray`, `red`, `blue`, `green`, `yellow`, `purple`, `pink`
**Shades:** `50` (lightest) → `900` (darkest)

### Changing Spacing
- `p-4` = padding (all sides)
- `px-4` = horizontal padding, `py-4` = vertical padding
- `m-4` = margin, `mx-4` = horizontal margin, `my-4` = vertical margin
- `gap-4` = space between items

**Values:** `1` = 4px, `2` = 8px, `4` = 16px, `8` = 32px, `12` = 48px

### Changing Text Size
- `text-sm` = small (14px)
- `text-base` = normal (16px)
- `text-lg` = large (18px)
- `text-xl` = extra-large (20px)
- `text-2xl` = 2x extra-large (24px)
- Up to `text-9xl` (128px)

---

## 🚀 Quick Tips

1. **Profile photo too far right?**
   - Go to Hero.tsx line 79
   - Change `'10% 10%'` to `'0% 10%'` (move left)

2. **Want bigger profile picture?**
   - Go to Hero.tsx line 40
   - Change `w-70 h-70` to `w-80 h-80`

3. **Add new skill category?**
   - Go to Skills.tsx lines 25-54
   - Copy one of the existing category blocks
   - Paste and edit the title and skills

4. **Add new project?**
   - Go to `/lib/projects.ts`
   - Add a new object to the array with id, title, description, etc.

---

## 📱 Need Help?

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **Component file locations:** `/components/` folder
- **Project data:** `/lib/projects.ts`
- **Main page:** `/app/page.tsx`
