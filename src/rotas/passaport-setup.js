// passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const prisma = require('./prisma'); // Import your Prisma client
const SUPABASE_URL = 'https://ytptarviikcuowxofzjh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0cHRhcnZpaWtjdW93eG9mempoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MDE3MzYsImV4cCI6MjAxODQ3NzczNn0.klxu8SiFNG89VyXvBsVBU9poEz2YZ56WyFurlEOeqE0 ';

passport.use(
  new GoogleStrategy(
    {
      clientID: '249479798663-30cv4jejfp17rn5mm6lh073u1u8atne6.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // Check if user already exists in our db
      const user = await prisma.user.upsert({
        where: { googleId: profile.id },
        update: {
          lastLogin: new Date(),
        },
        create: {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        },
      });

      // Return user object
      done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user);
});
