import {faker} from '@faker-js/faker';
import type {SexType} from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

interface IFakerUser {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
}

function createRandomUser(): IFakerUser {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({firstName, lastName});

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  };
}

export const user = createRandomUser();
