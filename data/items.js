import faker from "faker";

const seed = ( add = 1 ) => {
  const now = Date.now();
  const dayOfMonth = new Date(now).getDate();
  return dayOfMonth + add;
};

export const getItems = ( count = 20 ) => {
    const items = [];
    while ( items.length < count ) {
        items.push({
            title: faker.company.companyName(),
            image: `https://picsum.photos/seed/${seed(items.length)}/300/300`,
            description: faker.lorem.paragraph(),
        });
    }

    return items;
}

const items = getItems();

export default items;