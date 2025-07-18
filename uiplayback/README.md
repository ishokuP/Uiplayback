# 🎬 Uiplayback — VTuber Clip Wall (App Docs)

This is the main web application for Uiplayback — a video wall that displays short, timestamped clips from VTuber streams, tagged and reactable.

---

## 🧩 Features

- 📥 **Clip Upload Page**  
  Paste a YouTube link, set start/end timestamps, add tags, and upload a preview clip.

- 🧱 **Video Wall**  
  Display all approved clips in a scrollable layout with thumbnails, tags, and reaction buttons.

- 💬 **Reactions**  
  Users can react to clips (e.g., 😂, 💀, 🔥, ❤️) and see live counts.

- 🎲 **Spin for Chaos**  
  Randomly watch one clip from the entire wall (coming soon).

- 🛡️ **Moderation Workflow**  
  Admin dashboard to approve or reject submitted clips (planned).

---

## 🧪 Local Setup

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Add environment variables**

   Create `.env.local` with the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Run dev server**

   ```bash
   pnpm dev
   ```

---

## 🗄 Supabase Schema (Simplified)

### `clips`

| Field         | Type      | Description                              |
|--------------|-----------|------------------------------------------|
| `id`         | UUID      | Primary key                              |
| `title`      | Text      | Optional title                           |
| `video_url`  | Text      | Link to original video                   |
| `start_time` | Integer   | Start timestamp in seconds               |
| `end_time`   | Integer   | End timestamp in seconds                 |
| `tags`       | Text[]    | Tags like ["Shigure", "Chaos"]           |
| `status`     | Text      | "pending", "approved", or "rejected"     |
| `created_by` | UUID      | FK to `users` table                      |
| `created_at` | Timestamp | Auto-generated                           |

### `reactions`

| Field      | Type    | Description               |
|-----------|---------|---------------------------|
| `clip_id` | UUID    | FK to `clips.id`          |
| `emoji`   | Text    | Emoji code (e.g. "😂")     |
| `count`   | Integer | Number of reactions        |

---

## 📦 Notes

- Storage is optimized by storing only preview clips.
- Reaction counts are updated using Supabase Row Level Security (RLS).
- Free-tier friendly and easily extensible.

---

## 🧾 License

MIT © ishokuP
