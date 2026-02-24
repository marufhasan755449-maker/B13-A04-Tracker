1. DOM selector গুলোর পার্থক্য
getElementById() → ID দিয়ে একটি element খুঁজে আনে
getElementsByClassName() → class দিয়ে একাধিক element খুঁজে আনে
querySelector() → প্রথম matching element আনে
querySelectorAll() → সব matching element আনে
2. নতুন element তৈরি ও DOM এ যোগ করা
createElement() দিয়ে নতুন element তৈরি করা হয়
তারপর appendChild() দিয়ে DOM এ যোগ করা হয়
3. Event Bubbling
Event bubbling হলো এমন একটি প্রক্রিয়া যেখানে event ভিতর থেকে বাইরে যায়।
4. Event Delegation
Parent element এ event দিয়ে child element handle করাকে event delegation বলে।
5. preventDefault() ও stopPropagation()
preventDefault() → default কাজ বন্ধ করে
stopPropagation() → event bubbling বন্ধ করে