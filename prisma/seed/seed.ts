import { seedPizzas } from "./data/pizza";
import { seedOrders } from "./data/orders";
import { seedContentOrders } from "./data/contentOrders";

async function main() {
  await seedPizzas();
  await seedOrders();
  await seedContentOrders();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
