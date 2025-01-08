import { currentUser } from '@clerk/nextjs/server';
import { db } from './prisma';

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    console.log('No user logged in.');
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      console.log('User found in the database:', loggedInUser);
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    console.log('New user created:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error while accessing or creating the user:', error);
  }

  // Ensure there's a return statement outside the try-catch block
  return null;
};
