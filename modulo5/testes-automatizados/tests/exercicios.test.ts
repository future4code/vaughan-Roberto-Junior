import { performPurchase, User } from "../src";

describe("testing", () => {
  test("Testanto exercicio2 a)", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };

    const result = performPurchase(user, 40);

    expect(result).toEqual({
      name: "Astrodev",
      balance: 60,
    });
  });

  test("Testanto exercicio2 b)", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });



  test("Testando exercicio2 c)", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})
});
