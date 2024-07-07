import {
  BlockLayout,
  InlineLayout,
  Text,
  useTranslate,
  reactExtension,
  useSettings,
  useSubtotalAmount,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.cart-line-list.render-after',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { freebie_title: freeItem } = useSettings();
  const { amount } = useSubtotalAmount();

  if (freeItem && amount > 1000) {
    return (
      <InlineLayout columns={['fill', '20%']}>
          <Text>{ freeItem }</Text>
          <BlockLayout inlineAlignment="end">
              <Text>Free</Text>
          </BlockLayout>
      </InlineLayout>
    );
  }  
}