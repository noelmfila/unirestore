export function currencyFormatter(amount: number)
{
    return 'R'+ (amount/100).toFixed(2);
}