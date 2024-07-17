## Getting Started

Clerk のアカウントを作成し、`CLERK_PUBLISHABLE_KEY`と`CLERK_SECRET_KEY`を取得してください。
Neon のアカウントを作成し、`DATABASE_URL`を取得してください。
それらを`.env.example`に記載し、ファイル名を`.env.local`に変えてください。
その後、以下のコマンドを入力するとローカルで起動できます。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000)をブラウザで開くことで確認することができます。

## Learn More

このプログラムは[こちらの動画](https://www.youtube.com/watch?v=N_uNKAus0II)を参考に作成しました。
技術スタックを大まかに以下の構成です。

- Next.js: https://nextjs.org/
- Hono: https://hono.dev/
- Drizzle ORM: https://orm.drizzle.team/
- shadcn/ui: https://ui.shadcn.com/
- tanstack: https://tanstack.com/
- zod
- zustand
- TypeScript
- Clerk: https://clerk.com/
- Neon DB: https://neon.tech/
