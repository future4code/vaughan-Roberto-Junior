


        export const mock = jest.fn(() => {
          const user = {
              name: "Astrodev",
              age: 29
          }
          return user
        })


        export const validatorMockTrue = jest.fn(() => {
          return true
        });


      export const validatorMockFalse = jest.fn(() => {
        return false
      });