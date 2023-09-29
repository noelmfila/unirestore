using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }

        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.Id != product.Id))
                Items.Add(new BasketItem { Product = product, Quantity = quantity });

            var existingItem = Items.FirstOrDefault(item => item.Id == product.Id);

            if (existingItem == null)
                return;

            existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(x => x.Id == productId);

            if (item == null) return;

            if (item.Quantity - quantity >= 0)
                item.Quantity -= quantity;

            if (item.Quantity == 0)
                Items.Remove(item);
        }

    }
}