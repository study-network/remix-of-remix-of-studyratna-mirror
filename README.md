# PW-Marco proxy

This project runs the server-side proxy as a Node application. It can be
previewed in Lovable or deployed to Heroku.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Heroku deployment

1. Create a Heroku app and connect this repository, or deploy it from your
   local checkout with the Heroku CLI.
2. Set the upstream origin as a config variable. Do not put it in source code:

   ```sh
   heroku config:set ORIGIN_BASE=https://your-authorized-origin.example
   heroku config:set PUBLIC_APP_ORIGIN=https://your-app.herokuapp.com
   ```

3. Push the repository. Heroku will run `npm install`, `npm run build`, and the
   `web` process declared in `Procfile`.

   ```sh
   git push heroku main
   heroku open
   ```

4. If the upstream provider checks the request origin, add your Heroku app URL
   to that provider's authorized-domain/allowlist settings. A reverse proxy
   cannot legitimately override an upstream `ORIGIN_MISMATCH_403`; the origin
   owner must authorize the new domain.

5. Confirm the runtime logs and the public URL:

   ```sh
   heroku logs --tail
   heroku info
   ```

### Required Heroku settings

| Variable            | Example                                  | Purpose                                      |
| ------------------- | ---------------------------------------- | -------------------------------------------- |
| `ORIGIN_BASE`       | `https://your-authorized-origin.example` | Upstream site/API base URL                   |
| `PUBLIC_APP_ORIGIN` | `https://your-app.herokuapp.com`         | Public URL sent to the upstream origin check |

Keep provider keys, signed media URLs, and cookies out of Git. Add them with
`heroku config:set` if the authorized upstream requires them.
