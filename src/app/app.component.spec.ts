import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  it('sets isUpdating to true after starting to edit', () => {
    const comp = new AppComponent();
    comp.editTodoItem(comp.todoItems[0], 0);
    expect(comp.isUpdating).toBeTrue();
  });
});
