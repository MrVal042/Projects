import {faker} from '@faker-js/faker';

faker.seed(123);

const users: UserProps[] = [...Array(30).keys()].map(() => {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({firstName, lastName});

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatarGitHub(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    fullName: `${firstName} ${lastName}`,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
});

export {users};
