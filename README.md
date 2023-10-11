<p align="center">
  <a href="https://twitter.com/">
    <img src="/public/x.png" height="96">
    <h3 align="center">Next.js Twitter Clone</h3>
  </a>
</p>
<p align="center">
This is a Twitter Clone App with <a href="https://nextjs.org/">Next.js</a> that uses <a href="https://next-auth.js.org/">Next-Auth</a> for simple email + password login and <a href="https://tailwindcss.com/"> TailwindCSS </a> to look appealing.
<a href="https://www.prisma.io/">Prisma</a> as the ORM, and a <a href="https://www.mongodb.com/">MongoDB </a> database to persist the data.</p>

<br/>

## Set Up For Your Local Machine
<ol>
<li>
  Clone the project with the following command
  
  <br/>
  
  ```bash
git clone "https://github.com/malicelebii/Next13-Twitter-Clone.git"
```
</li>

<li>
  Install the necessary packages by running
  
  <br/>
  
  ```bash
npm install
# or
yarn add
```
</li>

<li>
  Create a cloudinary account and get your name
</li>
<li>
Create .env file and set the following values into it
  
```bash
DATABASE_URL = [YOUR_DATABASE_URL]
NEXTAUTH_SECRET = [YOUR_SECRET]
JWT_SECRET = [YOUR_SECRET]
NEXT_PUBLIC_CLOUDINARY_NAME = [YOUR_CLOUDINARY_NAME]
```

</li>
</ol>

## Run the project


```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

