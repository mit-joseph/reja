console.log("FrontEnd JS ishga tushdi"); 
// Konsolga "FrontEnd JS ishga tushdi" deb chiqaradi. Bu skript ishga tushganini tekshirish uchun ishlatiladi.

function itemTemplate(item) {
    // itemTemplate nomli funksiyani yaratadi. Bu funksiya berilgan item obyektini HTML shaklida list item (<li>) ga aylantiradi
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="item-text">${item.reja}</span>
          <div class="d-flex gap-2">
            <button data-id="${item._id}"
             class="edit-me btn btn-secondary btn-sm">
             Ozgartirish
            </button>
            
            <button data-id="${item._id}"
            class="delete-me btn btn-danger btn-sm">
            Ochirish
            </button>
          </div>
        </li>`;
    // Bu yerda har bir item uchun HTML struktura qaytariladi, shu jumladan "Ozgartirish" va "Ochirish" tugmalari bilan
}

let createField = document.getElementById("create-field");
// HTML sahifadagi input elementini olish va uni createField o'zgaruvchisiga saqlash

document.getElementById("create-form").addEventListener("submit", function(e) {
  e.preventDefault();  // Forma yuborilganda sahifa qayta yuklanishini oldini oladi

  axios
  .post("/create-item", {reja: createField.value})
  // Serverga POST so'rov yuboradi, createField.value (inputdagi qiymat) bilan

  .then((response) => {
    document
    .getElementById("item-list")
    .insertAdjacentHTML("beforeend", itemTemplate(response.data)); // Serverdan kelgan javobni itemTemplate funksiyasi orqali HTML ga aylantirib, item-list ichiga qo'shadi
    createField.value = "";    // Input maydonini bo'shatadi
    createField.focus();    // Fokusni yana input maydoniga qaytaradi, yozishni davom ettirish uchun
  })
  .catch((err) => {
    console.log("Iltimos qaytadan harakat qiling")    // Agar server bilan bog'lanishda xato bo'lsa, konsolga xabar chiqaradi
  })

});

document.addEventListener("click", function (e) {    // Butun hujjatda click eventini ushaydi (delegation)
    console.log(e.target);    // click elementni konsolga chiqaradi

    if (e.target.classList.contains("delete-me")) {
        // Agar click elementda delete tugmasi bo'lsa
        if (confirm("Aniq ochirmoqchimisiz?")) {            // Foydalanuvchidan tasdiq so'raydi
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                // Serverga delete so'rov yuboradi, tugma data-id atributidan ID oladi
                .then((respose) => {
                    console.log(respose.data);
                    e.target.parentElement.parentElement.remove();
                    // Agar muvaffaqiyatli bo'lsa, HTML dan o'sha itemni olib tashlaydi
                })
                .catch((err) => {
                    console.log("Iltimos qaytadan harakat qiling!");
                    // Agar xato bo'lsa, xabar chiqaradi
                });
        }
    }
});
