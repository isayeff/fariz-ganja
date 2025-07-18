const privateSecList = [
    {
        id: 1,
        name: "kreditlər",
        items: [
            "istehlak krediti",
            "atb card kredit",
            "əmanət qarşılığında kredit"
        ]
    },
    {
        id: 2,
        name: "kartlar",
        items: [
            "atb card",
            "atb card kredit",
            "atb card premium",
            "atb junior",
            "cashback",
        ]
    },
    {
        id: 3,
        name: "ipoteka",
        items: [
            "ipoteka krediti",
            "güzəştli ipoteka krediti",
            '"MİDA" MMC xətti ilə güzəştli ipoteka'
        ]
    },
    {
        id: 4,
        name: "əmanətlər",
        items: [
            "klassik əmanət",
            "depozit qutuları"
        ]
    },
    {
        id: 5,
        name: "onlayn",
        items: [
            "atb card",
            "atb card kredit",
            "atb card premium",
            "atb junior",
            "cashback",
        ]
    },
    {
        id: 6,
        name: "digər",
        items: [
            "atb card",
            "atb card kredit",
            "atb card premium",
            "atb junior",
            "cashback",
        ]
    },
]
const moreInfo = ["bank məlumatları", "karyera mərkəzi", "məlumatların açıqlanması", "xəbərlər", "bankla əlaqə", "irad və təkliflər", "filiallar", "təhlükəsizliyiniz", "satınalmalar", "xeyriyyəçilik"];
const info = ["tariflər", "sms bildiriş", "kartlar üzrə digər xidmətlər", "kart əməliyyatlarında məhdudiyyətlər"]

const sidebarList = document.querySelector(".sidebarList");
const sidebarList2 = document.querySelector(".sidebarList2");
const accordionDiv = document.querySelector(".accordion-div");
const navbarList = document.querySelector(".navbarList")
const headerDropdownMenu = document.querySelector(".headerDropdownMenu")

privateSecList.map(item => {
    accordionDiv.innerHTML += ` 
<div class="border-b border-slate-200">
  <button onclick="toggleAccordion(${item.id})" class="w-full flex justify-between items-center py-[9px] text-slate-800">
    <span>${item.name}</span>
    <span id="icon-${item.id}" class="text-slate-800 transition-transform duration-300 !text-[#6f0bbb]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    </span>
  </button>
  <ul id="content-${item.id}" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
      ${item.items.map(subItem => `<li class="py-[8px] text-[15px] text-slate-500 hover:text-[#6f0bbb]"><a href="#">${subItem}</a></li>`).join("")}
  </ul>
</div>
`;

    navbarList.innerHTML += `<li><a class="hover:text-[#6f0bbb]" href="#">${item.name.toUpperCase()}</a></li>`
});

moreInfo.forEach((item) => {
    sidebarList.innerHTML += `<li>
        <a href="#"
            class="flex items-center py-2 text-[#6F6F6F] rounded-lg hover:bg-gray-100 group">
            <span>${item}</span>
        </a>
    <li/> `;

    headerDropdownMenu.innerHTML += `<li>
                            <a href="#"
                                class="block">${item}</a>
                        </li>`
})

info.forEach((item) => {
    sidebarList2.innerHTML += `<li>
        <a href="#"
            class="flex items-center py-2 text-[#6F6F6F] rounded-lg hover:bg-gray-100 group">
            <span>${item}</span>
        </a>
    <li/>`;
})



// Accordion
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;

    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = plusSVG;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = minusSVG;
    }
}



// Card Section
const cardsContaner = document.querySelector('.cards');

const cardsArr = [
    {
        image: "percent.png",
        title: "kredit",
        desc: "sərfəli şərtlərlə nağd kredit",
        url: "https://atb.az/kredit/"
    },
    {
        image: "credit-card.png",
        title: "atb card",
        desc: "qalığa gəlir əldə edin, kartdan karta 0%-lə köçürün",
        url: "https://atb.az/atb-kart/"
    },
    {
        image: "credit-card-plus.png",
        title: "atb card kredit",
        desc: "10 000 AZN-dək kredit xətli kart sifariş edin",
        url: "https://atb.az/kredit-kart/"
    },
    {
        image: "junior.png",
        title: "atb junior",
        desc: "yeni atb junior kartı",
        url: "https://atb.az/junior/"
    },
]

cardsArr.map(card => {
    cardsContaner.innerHTML += `<li class="card rounded-xl p-4 hover:translate-y-[-20px] translate-all duration-300 ease-in-out hover:shadow-xl">
                        <a target="_blank" href="${card.url}">
                            <div class="card-top">
                            <img src="assets/images/${card.image}"/> 
                        </div>
                        <div class="card-bottom">
                            <h3 class="card-title mt-[46px] text-[20px] mb-[14px] font-bold">${card.title}</h3>
                            <p class="font-[300] text-[18px] mb-[46px]">${card.desc}</p>
                        </div>
                        </a>
                    </li>`
});



// Functions
const calcType = document.querySelectorAll(".calcType");

function changeCalc(e) {
    const currentElement = e.currentTarget;
    if (currentElement.classList.contains("active")) return;
    calcType.forEach((item, index) => {
        item.classList.remove("active");

    })

    currentElement.classList.add("active")


}

const cashSection = document.querySelector("#cash-loan-section");
const depositSection = document.querySelector("#deposit-section");
const cashLoan = document.querySelector("#cash-loan");
const deposit = document.querySelector("#deposit");

cashLoan.addEventListener('click', () => {
    depositSection.classList.add('hidden');
    cashSection.classList.remove('hidden');
})
deposit.addEventListener('click', () => {
    cashSection.classList.add('hidden');
    depositSection.classList.remove('hidden');
})

const slider = document.getElementById("amountRange");
const slider2 = document.getElementById("amountRange2");

updateRangeBackground(slider);
updateRangeBackground(slider2);


function updateRangeBackground(sliderElement, event = null) {
    const min = +sliderElement.min;
    const max = +sliderElement.max;
    const val = +sliderElement.value;
    const percent = ((val - min) / (max - min)) * 100;

    sliderElement.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${percent}%, transparent ${percent}%, transparent 100%)`;

    if (event) {
        const currentElement = event.currentTarget;
        if (currentElement.classList.contains("cashRange")) {
            cashInp.value = val;
            getValue();
        } else {
            monthInp.value = val;
            getValue();
        }
    }

}

const cashInp = document.getElementById("cashInput");
const monthInp = document.getElementById("monthInput");

cashInp.addEventListener("change", () => {
    if (cashInp.value < 300) {
        cashInp.value = 300;
    }
    if (cashInp.value > 40000) {
        cashInp.value = 40000;
    }
    slider.value = cashInp.value;
    updateRangeBackground(slider);

});

monthInp.addEventListener("change", () => {
    if (monthInp.value < 3) {
        monthInp.value = 3;
    }
    if (monthInp.value > 48) {
        monthInp.value = 48;
    }
    slider2.value = monthInp.value;
    updateRangeBackground(slider2);
});



function getDynamicPercent() {
    let time = monthInp.value;
    if (time <= 12) {
        return 11;
    } else if (time > 12 && time <= 24) {
        return 15;
    }
    else if (time > 24 && time <= 36) {
        return 16;
    } else {
        return 17;
    }
}

function getValue() {
    const price = cashInp.value;
    const month = monthInp.value;
    const monthlyPercentEl = document.querySelector(".monthlyPercent");
    const monthlyPaymentEl = document.querySelector(".monthlyPayment")
    let monthlyPercentVal = getDynamicPercent() / 12 / 100;

    let k = (monthlyPercentVal * (1 + monthlyPercentVal) ** month) / ((1 + monthlyPercentVal) ** month - 1);
    let monthlyPaymentVal = Math.round(k * price);

    monthlyPercentEl.innerHTML = `${getDynamicPercent()} %`
    monthlyPaymentEl.innerHTML = `${monthlyPaymentVal} ₼`
}



const dropdownToggles = document.querySelectorAll(".dropdownToggle");

dropdownToggles.forEach((toggle, index) => {
    const menu = document.querySelectorAll(".dropdownMenu")[index];
    const arrow = toggle.querySelector(".arrowIcon");
    const selected = toggle.querySelector(".selectedCurrency");

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.contains("scale-y-100");

        menu.classList.toggle("scale-y-100", !isOpen);
        menu.classList.toggle("opacity-100", !isOpen);
        menu.classList.toggle("opacity-0", isOpen);
        menu.classList.toggle("pointer-events-auto", !isOpen);
        menu.classList.toggle("pointer-events-none", isOpen);

        arrow.classList.toggle("rotate-180", !isOpen);
    });

    menu.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => {
            selected.innerText = li.innerText;

            menu.classList.remove("scale-y-100", "opacity-100", "pointer-events-auto");
            menu.classList.add("opacity-0", "pointer-events-none");

            arrow.classList.remove("rotate-180");
        });
    });
});
