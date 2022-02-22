import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";

export default function main(app) {
  const storageStack = new StorageStack(app, "storage");

  // Add more stacks
  new ApiStack(app, "api", {
    table: storageStack.table,
  });
}
