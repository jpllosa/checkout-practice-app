// @ts-check

import { PaymentCustomizationPaymentMethodPlacement } from "../generated/api";

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const hidePaymentMethod = input.paymentMethods.find(
    (method) =>
      method.name.toLocaleLowerCase().trim() === "paypal express checkout"
  )

  if (hidePaymentMethod) {
    return {
        operations: [
        {
          hide: {
            paymentMethodId: hidePaymentMethod.id,
            placements: [PaymentCustomizationPaymentMethodPlacement.AcceleratedCheckout]
          }
        }
      ]
    }
  }

  return NO_CHANGES;
};