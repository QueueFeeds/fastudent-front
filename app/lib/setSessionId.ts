import getSession from "./session";

export const setSessionId = async (newUser: { id: number }) => {
  const session = await getSession();
  session.id = newUser.id;
  await session.save();
};
