
"use strict";

/* =========================================
   PEREZOSOS SHOP
   Catálogo, filtros, modal, carrito y WhatsApp
========================================= */

const WHATSAPP_NUMBER = "521XXXXXXXXXX"; // Reemplaza por tu número real.
const CART_KEY = "perezosos-shop-cart";

const $ = id => document.getElementById(id);

const money = value =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(value);

const products = [

{
  id: 1,
  name: "Sudadera Dama Perezosos Shop",
  category: "Sudaderas",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/sudadera-negra.jpg",
  variants: [
    {
      name: "Sudadera Negra",
      hex: "#000000",
      image: "assets/productos/sudadera-negra.jpg"
    },
    {
      name: "Azul Marino",
      hex: "#07284e",
      image: "assets/productos/sudadera-marino.jpg"
    },
    {
      name: "Sudadera Gris Heather",
      hex: "#c9c5cf",
      image: "assets/productos/sudadera-gris.jpg"
    },
    {
      name: "Sudadera Rosa",
      hex: "#ecbec7",
      image: "assets/productos/sudadera-rosa.jpg"
    },
    {
      name: "Sudadera Vino",
      hex: "#661b2a",
      image: "assets/productos/sudadera-vino.jpg"
    },
    {
      name: "Sudadera Oxford",
      hex: "#3a393f",
      image: "assets/productos/sudadera-oxford.jpg"
    }
  ],
  colors: ["#000000", "#07284e", "#c9c5cf", "#ecbec7", "#661b2a", "#3a393f"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 2,
  name: "Jogger Perezosos Shop",
  category: "Joggers",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/jogger-negro.jpg",
  variants: [
    {
      name: "Jogger Negro",
      hex: "#000000",
      image: "assets/productos/jogger-negro.jpg"
    },
    {
      name: "Azul Marino",
      hex: "#07284e",
      image: "assets/productos/jogger-marino.jpg"
    },
    {
      name: "Jogger Gris Heather",
      hex: "#c9c5cf",
      image: "assets/productos/jogger-gris.jpg"
    },
    {
      name: "Jogger Oxford",
      hex: "#3a393f",
      image: "assets/productos/jogger-oxford.jpg"
    }
  ],
  colors: ["#000000", "#07284e", "#c9c5cf", "#3a393f"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 3,
  name: "Playera Caballero Perezosos Shop - 100% Algodón",
  category: "Playeras",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/playera-negra.jpg",
  variants: [
    {
      name: "Playera Negra",
      hex: "#000000",
      image: "assets/productos/playera-negra.jpg"
    },
    {
      name: "Azul Marino",
      hex: "#07284e",
      image: "assets/productos/playera-marino.jpg"
    },
    {
      name: "Gris Heather",
      hex: "#c9c5cf",
      image: "assets/productos/playera-gris.jpg"
    },
    {
      name: "Negro Vintage",
      hex: "#544f53",
      image: "assets/productos/playera-vintage.jpg"
    },
    {
      name: "Azul Ártico",
      hex: "#d0ecff",
      image: "assets/productos/playera-artico.jpg"
    }
  ],
  colors: ["#000000", "#07284e", "#c9c5cf", "#544f53", "#d0ecff"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 4,
  name: "Gorro Perezosos Shop",
  category: "Gorros",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/gorro.jpg",
  colors: ["#000000"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 5,
  name: "Playera Dama Perezosos Shop - 100% Algodón",
  category: "Playeras",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/mujer-negra.jpg",
  variants: [
    {
      name: "Playera Negra",
      hex: "#000000",
      image: "assets/productos/mujer-negra.jpg"
    },
    {
      name: "Rosa",
      hex: "#ecbec7",
      image: "assets/productos/mujer-rosa.jpg"
    },
    {
      name: "Fiusha",
      hex: "#fe70ae",
      image: "assets/productos/mujer-fiusha.jpg"
    },
    {
      name: "Vino",
      hex: "#661b2a",
      image: "assets/productos/mujer-vino.jpg"
    }
  ],
  colors: ["#000000", "#ecbec7", "#fe70ae", "#661b2a"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 6,
  name: "Playera Crop Top Perezosos Shop",
  category: "Playeras",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/croptop-rosa.jpg",
  variants: [
    {
      name: "Playera Negra",
      hex: "#000000",
      image: "assets/productos/croptop-negra.jpg"
    },
    {
      name: "Rosa",
      hex: "#ecbec7",
      image: "assets/productos/croptop-rosa.jpg"
    },
    {
      name: "Pistache",
      hex: "#a0b98a",
      image: "assets/productos/croptop-pistache.jpg"
    },
    {
      name: "Naranja",
      hex: "#e4a586",
      image: "assets/productos/croptop-naranja.jpg"
    }
  ],
  colors: ["#000000", "#ecbec7", "#a0b98a", "#e4a586"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 7,
  name: "Playera Manga Corta Caballero Perezosos Shop",
  category: "Playeras",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/mangacorta-lila.jpg",
  variants: [
    {
      name: "Lila",
      hex: "#f9dbea",
      image: "assets/productos/mangacorta-lila.jpg"
    },
    {
      name: "Acero",
      hex: "#a0d8fc",
      image: "assets/productos/mangacorta-acero.jpg"
    },
    {
      name: "Negra",
      hex: "#000000",
      image: "assets/productos/mangacorta-negra.jpg"
    },
    {
      name: "Azul",
      hex: "#5789b8",
      image: "assets/productos/mangacorta-azul.jpg"
    },
    {
      name: "Cielo",
      hex: "#cbd0f9",
      image: "assets/productos/mangacorta-cielo.jpg"
    }
  ],
  colors: ["#f9dbea", "#a0d8fc", "#000000", "#5789b8", "#cbd0f9"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 8,
  name: "Sudadera Caballero Sport Perezosos Shop",
  category: "Sudaderas",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/sudaderasport-lila.jpg",
  variants: [
    {
      name: "Lila",
      hex: "#f9dbea",
      image: "assets/productos/sudaderasport-lila.jpg"
    },
    {
      name: "Negra",
      hex: "#000000",
      image: "assets/productos/sudaderasport-negra.jpg"
    },
    {
      name: "Azul Marino",
      hex: "#07284e",
      image: "assets/productos/sudaderasport-azulmarino.jpg"
    },
    {
      name: "Oxford",
      hex: "#3a393f",
      image: "assets/productos/sudaderasport-oxford.jpg"
    },
    {
      name: "Gris Heather",
      hex: "#c9c5cf",
      image: "assets/productos/sudaderasport-gris.jpg"
    },
    {
      name: "Vino",
      hex: "#661b2a",
      image: "assets/productos/sudaderasport-vino.jpg"
    },
    {
      name: "Verde Hoja Jaspe",
      hex: "#838987",
      image: "assets/productos/sudaderasport-verde.jpg"
    },
    {
      name: "Pizarra",
      hex: "#67869b",
      image: "assets/productos/sudaderasport-pizarra.jpg"
    }
  ],
  colors: ["#f9dbea", "#000000", "#07284e", "#3a393f", "#c9c5cf", "#661b2a", "#838987", "#67869b"],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
{
  id: 9,
  name: "Sudadera con cierre Perezosos Shop",
  category: "Sudaderas",
  price: 299,
  tag: "Favorita",
  image: "assets/productos/sudaderacierre-negra.jpg",
  variants: [
    {
      name: "Negra",
      hex: "#000000",
      image: "assets/productos/sudaderacierre-negra.jpg"
    },
    {
      name: "Vino",
      hex: "#661b2a",
      image: "assets/productos/sudaderacierre-vino.jpg"
    },
    {
      name: "Azul Marino",
      hex: "#07284e",
      image: "assets/productos/sudaderacierre-marino1.jpg"
    },
        {
      name: "Azul Marino",
      hex: "#07284e",
      image: "assets/productos/sudaderacierre-marino2.jpg"
    },
        {
      name: "Gris Oxford",
      hex: "#3a393f",
      image: "assets/productos/sudaderacierre-gris1.jpg"
    },
        {
      name: "Gris Oxford",
      hex: "#3a393f",
      image: "assets/productos/sudaderacierre-gris2.jpg"
    },
    {
      name: "Gris Heather",
      hex: "#c9c5cf",
      image: "assets/productos/sudaderacierre-grish.jpg"
    }
  ],
  colors: ["#000000", "#661b2a", "#07284e", "#3a393f", "#c9c5cf",],
  description: "Sudadera cómoda, suave y perfecta para tu outfit favorito."
},
];

/* NOMBRES DE COLORES */

const colorNames = {
  "#f4bfd9": "Rosa pastel",
  "#fff4e7": "Crema",
  "#765247": "Café",
  "#ead9c9": "Beige",
  "#e9a9cb": "Rosa",
  "#d8bfae": "Beige tostado",
  "#f1b6d6": "Rosa claro",
  "#f5eee5": "Marfil",
  "#f2c0d9": "Rosa blush",
  "#d4b9a5": "Arena",
  "#f6a9d2": "Rosa pastel",
  "#e9dfd2": "Beige claro",
  "#b39a85": "Taupe"
};

let activeCategory = "Todos";
let selectedProduct = null;
let toastTimer;
let previousBodyOverflow = "";
let lastFocusedElement = null;

const focusableSelector =
  'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

/* =========================================
   CARRITO Y ALMACENAMIENTO
========================================= */

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "{}");

    if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
      return {};
    }

    const result = {};

    for (const [oldKey, value] of Object.entries(saved)) {
      const item = value && typeof value === "object"
        ? value
        : { qty: value };

      const id = Number(item.id ?? oldKey.split(":")[0]);
      const qty = Math.floor(Number(item.qty));

      if (
        !products.some(product => product.id === id) ||
        !Number.isFinite(qty) ||
        qty <= 0
      ) {
        continue;
      }

      const size = String(item.size || "Sin especificar");
      const color = String(item.color || "Sin especificar");
      const key = `${id}:${size}:${color}`;

      if (!result[key]) {
        result[key] = { id, size, color, qty: 0 };
      }

      result[key].qty += qty;
    }

    return result;
  } catch (error) {
    console.warn("No se pudo recuperar el carrito:", error);
    return {};
  }
}

let cart = loadCart();

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("No se pudo guardar el carrito:", error);
    showToast("No se pudo guardar el carrito en este navegador.");
  }
}

function getCartEntries() {
  return Object.entries(cart).filter(([, item]) =>
    item &&
    Number.isFinite(Number(item.qty)) &&
    item.qty > 0 &&
    products.some(product => product.id === Number(item.id))
  );
}

function cartQuantity() {
  return getCartEntries().reduce(
    (sum, [, item]) => sum + item.qty,
    0
  );
}

function cartTotal() {
  return getCartEntries().reduce((sum, [, item]) => {
    const product = products.find(p => p.id === Number(item.id));

    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

/* =========================================
   MENSAJES
========================================= */

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================================
   CATÁLOGO Y FILTROS
========================================= */

function renderProducts() {
  const grid = $("product-grid");
  if (!grid) return;

  const query = ($("search-input")?.value || "")
    .trim()
    .toLocaleLowerCase("es");

  const sort = $("sort-select")?.value || "featured";

  let list = products.filter(product => {
    const matchesCategory =
      activeCategory === "Todos" ||
      product.category === activeCategory;

    const searchableText = [
      product.name,
      product.category,
      product.description
    ].join(" ").toLocaleLowerCase("es");

    return matchesCategory && searchableText.includes(query);
  });

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "es"));
  }

  if (!list.length) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No encontramos esa prenda ♡</h3>
        <p>Prueba con otra búsqueda o categoría.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(product => `
    <article class="product-card" data-product="${product.id}">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        ${product.tag
          ? `<span class="product-tag">${product.tag}</span>`
          : ""}

        <button
          type="button"
          class="quick-add"
          data-add="${product.id}"
          aria-label="Elegir opciones de ${product.name}"
        >+</button>
      </div>

      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>

        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>


<span class="product-colors" aria-label="Seleccionar color">
  ${(product.variants || product.colors.map(hex => ({
    hex,
    name: colorNames[hex.toLowerCase()] || hex,
    image: product.image
  }))).map((variant, index) => `
    <button
      type="button"
      class="color-dot ${index === 0 ? "selected" : ""}"
      style="--swatch-color: ${variant.hex || variant.color}"
      data-card-color="${product.id}"
      data-color-index="${index}"
      aria-label="${variant.name || colorNames[(variant.hex || variant.color).toLowerCase()] || "Color"}"
      title="${variant.name || colorNames[(variant.hex || variant.color).toLowerCase()] || "Color"}"
      aria-pressed="${index === 0}"
    ></button>
  `).join("")}
</span>

        </div>
      </div>
    </article>
  `).join("");
}

$("search-input")?.addEventListener("input", renderProducts);
$("sort-select")?.addEventListener("change", renderProducts);

$("category-pills")?.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll("#category-pills .pill").forEach(pill => {
    const isActive = pill === button;

    pill.classList.toggle("active", isActive);
    pill.setAttribute("aria-pressed", String(isActive));
  });

  renderProducts();
});

/* =========================================
   MODAL DE PRODUCTOS
========================================= */

function openProductModal(productId) {
  const product = products.find(p => p.id === Number(productId));
  const overlay = $("product-modal-overlay");

  if (!product || !overlay) return;

  const image = $("modal-product-image");
  const name = $("modal-product-name");
  const price = $("modal-product-price");
  const description = $("modal-product-description");
  const size = $("modal-product-size");
  const color = $("modal-product-color");
  const quantity = $("modal-product-quantity");

  if (!image || !name || !price || !description ||
      !size || !color || !quantity) {
    console.error("Faltan elementos necesarios en el modal.");
    showToast("Revisa los elementos del modal en index.html.");
    return;
  }

  lastFocusedElement = document.activeElement;
  previousBodyOverflow = document.body.style.overflow;

  selectedProduct = product;

  image.src = product.image;
  image.alt = product.name;
  name.textContent = product.name;
  price.textContent = money(product.price);
  description.textContent = product.description;

  size.value = "";
  quantity.value = "1";
  quantity.min = "1";
  quantity.max = "99";


const colorOptions = $("modal-color-options");

if (!colorOptions) {
  console.error("Falta el contenedor de colores del modal.");
  showToast("Revisa el HTML de los colores.");
  return;
}

const variants = product.variants || product.colors.map(hex => ({
  hex,
  name: colorNames[hex.toLowerCase()] || hex,
  image: product.image
}));

color.value = "";

colorOptions.innerHTML = `
  ${variants.map((variant, index) => `
    <button
      type="button"
      class="modal-color-dot"
      style="--swatch-color: ${variant.hex}"
      data-modal-color-index="${index}"
      aria-label="${variant.name}"
      title="${variant.name}"
      aria-pressed="false"
    ></button>
  `).join("")}

  <span class="modal-color-name" id="modal-color-name">
    Selecciona un color
  </span>
`;


  overlay.hidden = false;
  document.body.style.overflow = "hidden";

  $("close-product-modal")?.focus();
}

function closeProductModal() {
  const overlay = $("product-modal-overlay");
  if (!overlay || overlay.hidden) return;

  overlay.hidden = true;
  selectedProduct = null;

  document.body.style.overflow =
    $("cart-drawer")?.classList.contains("open")
      ? "hidden"
      : previousBodyOverflow;

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

$("product-grid")?.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    event.stopPropagation();
    openProductModal(addButton.dataset.add);
    return;
  }

  const card = event.target.closest("[data-product]");

  if (card) {
    openProductModal(card.dataset.product);
  }
});


$("product-grid")?.addEventListener("click", event => {
  const swatch = event.target.closest("[data-card-color]");
  if (!swatch) return;

  event.stopPropagation();

  const product = products.find(
    p => p.id === Number(swatch.dataset.cardColor)
  );

  if (!product) return;

  const variants = product.variants || product.colors.map(hex => ({
    hex,
    name: colorNames[hex.toLowerCase()] || hex,
    image: product.image
  }));

  const variant = variants[Number(swatch.dataset.colorIndex)];
  if (!variant) return;

  const card = swatch.closest(".product-card");
  const image = card?.querySelector(".product-image");

  if (image) {
    image.src = variant.image || product.image;
    image.alt = `${product.name} - ${variant.name || "Color seleccionado"}`;
  }

  card?.querySelectorAll("[data-card-color]").forEach(button => {
    const active = button === swatch;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });
});


$("modal-color-options")?.addEventListener("click", event => {
  const button = event.target.closest("[data-modal-color-index]");
  if (!button || !selectedProduct) return;

  const product = selectedProduct;

  const variants = product.variants || product.colors.map(hex => ({
    hex,
    name: colorNames[hex.toLowerCase()] || hex,
    image: product.image
  }));

  const variant = variants[Number(button.dataset.modalColorIndex)];
  if (!variant) return;

  // Guardar el color para el carrito.
  $("modal-product-color").value = variant.name;


// Cambiar la imagen según el color elegido.
const image = $("modal-product-image");

if (image) {
  const imageToShow = variant.image || product.image;

  // Reiniciar la imagen antes de cargar la nueva.
  image.src = imageToShow;
  image.alt = `${product.name} - ${variant.name}`;
}

  // Marcar la ruedita seleccionada.
  $("modal-color-options")
    .querySelectorAll("[data-modal-color-index]")
    .forEach(dot => {
      const active = dot === button;
      dot.classList.toggle("selected", active);
      dot.setAttribute("aria-pressed", String(active));
    });

  // Mostrar el nombre del color.
  const name = $("modal-color-name");
  if (name) name.textContent = variant.name;
});


$("close-product-modal")?.addEventListener("click", closeProductModal);

$("product-modal-overlay")?.addEventListener("click", event => {
  if (event.target === $("product-modal-overlay")) {
    closeProductModal();
  }
});

/* CANTIDAD DEL MODAL */

$("modal-quantity-minus")?.addEventListener("click", () => {
  const input = $("modal-product-quantity");
  if (!input) return;

  input.value = Math.max(1, (Number(input.value) || 1) - 1);
});

$("modal-quantity-plus")?.addEventListener("click", () => {
  const input = $("modal-product-quantity");
  if (!input) return;

  input.value = Math.min(99, (Number(input.value) || 1) + 1);
});

$("modal-product-quantity")?.addEventListener("change", event => {
  const input = event.currentTarget;
  const value = Number(input.value);

  input.value = String(
    Number.isFinite(value)
      ? Math.min(99, Math.max(1, Math.floor(value)))
      : 1
  );
});

/* AGREGAR AL CARRITO DESDE EL MODAL */

function addToCart(product, size, color, quantity = 1) {
  if (!product) return;

  const key = `${product.id}:${size}:${color}`;

  if (!cart[key]) {
    cart[key] = {
      id: product.id,
      size,
      color,
      qty: 0
    };
  }

  cart[key].qty += quantity;

  saveCart();
  renderCart();
  showToast("¡Producto agregado a tu carrito! ♡");
}

$("modal-add-to-cart")?.addEventListener("click", () => {
  if (!selectedProduct) return;

  const size = $("modal-product-size")?.value;
  const color = $("modal-product-color")?.value;
  const quantity = Number($("modal-product-quantity")?.value);

  if (!size) {
    showToast("Selecciona una talla ♡");
    $("modal-product-size")?.focus();
    return;
  }

  if (!color) {
    showToast("Selecciona un color ♡");
    $("modal-product-color")?.focus();
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    showToast("Selecciona una cantidad entre 1 y 99.");
    return;
  }

  addToCart(selectedProduct, size, color, quantity);
  closeProductModal();
});

/* =========================================
   CARRITO
========================================= */

function renderCart() {
  const items = $("cart-items");
  if (!items) return;

  const entries = getCartEntries();

  if ($("cart-count")) {
    $("cart-count").textContent = cartQuantity();
  }

  if ($("cart-empty")) {
    $("cart-empty").hidden = entries.length > 0;
  }

  if ($("cart-footer")) {
    $("cart-footer").hidden = entries.length === 0;
  }

  items.innerHTML = entries.map(([key, item]) => {
    const product = products.find(p => p.id === Number(item.id));
    if (!product) return "";

    return `
      <div class="cart-line">
        <img src="${product.image}" alt="${product.name}">

        <div>
          <h3>${product.name}</h3>
          <span class="line-price">${money(product.price)}</span>

          <small>
            Talla: ${item.size} · Color: ${item.color}
          </small>

          <div class="line-controls">
            <button
              type="button"
              data-qty="${key}"
              data-delta="-1"
              aria-label="Quitar una unidad de ${product.name}"
            >−</button>

            <span>${item.qty}</span>

            <button
              type="button"
              data-qty="${key}"
              data-delta="1"
              aria-label="Agregar una unidad de ${product.name}"
            >+</button>
          </div>
        </div>

        <button
          type="button"
          class="remove-line"
          data-remove="${key}"
          aria-label="Eliminar ${product.name}"
        >×</button>
      </div>
    `;
  }).join("");

  if ($("cart-total")) {
    $("cart-total").textContent = `${money(cartTotal())} MXN`;
  }
}

function openCart() {
  const drawer = $("cart-drawer");
  const overlay = $("cart-overlay");

  if (!drawer || !overlay || drawer.classList.contains("open")) return;

  lastFocusedElement = document.activeElement;
  previousBodyOverflow = document.body.style.overflow;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  drawer.removeAttribute("inert");

  overlay.hidden = false;
  document.body.style.overflow = "hidden";

  $("close-cart")?.focus();
}

function closeCart() {
  const drawer = $("cart-drawer");
  const overlay = $("cart-overlay");

  if (!drawer || !drawer.classList.contains("open")) return;

  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  drawer.setAttribute("inert", "");

  if (overlay) overlay.hidden = true;

  document.body.style.overflow =
    $("product-modal-overlay")?.hidden === false
      ? "hidden"
      : previousBodyOverflow;

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

$("open-cart")?.addEventListener("click", openCart);
$("close-cart")?.addEventListener("click", closeCart);
$("cart-overlay")?.addEventListener("click", closeCart);

$("continue-shopping")?.addEventListener("click", () => {
  closeCart();
  $("catalogo")?.scrollIntoView({ behavior: "smooth" });
});

$("cart-items")?.addEventListener("click", event => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");

  if (qtyButton) {
    const key = qtyButton.dataset.qty;
    const delta = Number(qtyButton.dataset.delta);

    if (cart[key] && Number.isFinite(delta)) {
      cart[key].qty += delta;

      if (cart[key].qty <= 0) {
        delete cart[key];
      }
    }
  }

  if (removeButton) {
    delete cart[removeButton.dataset.remove];
  }

  saveCart();
  renderCart();
});

$("clear-cart")?.addEventListener("click", () => {
  cart = {};
  saveCart();
  renderCart();
});

/* =========================================
   PEDIDO POR WHATSAPP
========================================= */

function checkoutWhatsApp() {
  const entries = getCartEntries();

  if (!entries.length) {
    showToast("Tu carrito está vacío ♡");
    return;
  }

  const number = WHATSAPP_NUMBER.replace(/\D/g, "");

  if (
    !number ||
    number.includes("XXXXXXXXXX") ||
    number.length < 10
  ) {
    showToast("Configura tu número de WhatsApp en script.js");
    return;
  }

  const lines = entries.map(([, item]) => {
    const product = products.find(p => p.id === Number(item.id));

    return [
      `• ${product.name}`,
      `Talla: ${item.size}`,
      `Color: ${item.color}`,
      `Cantidad: ${item.qty}`,
      `Subtotal: ${money(product.price * item.qty)}`
    ].join(" | ");
  });

  const message = [
    "¡Hola, Perezosos Shop! ♡",
    "Quiero hacer este pedido:",
    "",
    ...lines,
    "",
    `Total estimado: ${money(cartTotal())} MXN`,
    "",
    "¿Me ayudan a confirmar disponibilidad y envío?"
  ].join("\n");

  const url =
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  const newWindow = window.open(url, "_blank");

  if (newWindow) {
    newWindow.opener = null;
  } else {
    showToast("Tu navegador bloqueó la ventana. Permite abrir WhatsApp.");
  }
}

$("checkout-button")?.addEventListener("click", checkoutWhatsApp);

/* =========================================
   MENÚ MÓVIL
========================================= */

const mobileMenuButton = $("mobile-menu-button");
const mobileNav = $("mobile-nav");

if (mobileMenuButton && mobileNav) {
  mobileMenuButton.addEventListener("click", () => {
    const isOpen =
      mobileMenuButton.getAttribute("aria-expanded") === "true";

    mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenuButton.setAttribute(
      "aria-label",
      isOpen ? "Abrir menú" : "Cerrar menú"
    );

    mobileMenuButton.textContent = isOpen ? "☰" : "×";
    mobileNav.hidden = isOpen;
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      mobileMenuButton.setAttribute("aria-expanded", "false");
      mobileMenuButton.setAttribute("aria-label", "Abrir menú");
      mobileMenuButton.textContent = "☰";
    });
  });
}

/* =========================================
   CERRAR VENTANAS CON ESCAPE
========================================= */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if ($("product-modal-overlay")?.hidden === false) {
      closeProductModal();
    } else {
      closeCart();
    }
  }

  // Mantiene el foco dentro del modal mientras está abierto.
  if (
    event.key === "Tab" &&
    $("product-modal-overlay")?.hidden === false
  ) {
    const modal = $("product-modal");
    const focusable = modal
      ? [...modal.querySelectorAll(focusableSelector)]
      : [];

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* =========================================
   JUANITO EN EL CATÁLOGO
   Aparece solo cuando el catálogo está visible
========================================= */

const catalogo = $("catalogo");
const mascot = $("catalog-mascot");

if (catalogo && mascot) {
  // Mantener oculta la mascota al cargar la página.
  mascot.classList.remove("is-visible");
  mascot.classList.remove("is-hiding");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // El usuario está viendo el catálogo.
        mascot.classList.remove("is-hiding");
        mascot.classList.add("is-visible");
      } else {
        // El usuario se alejó del catálogo.
        mascot.classList.remove("is-visible");
        mascot.classList.add("is-hiding");
      }
    },
    {
      threshold: 0.1
    }
  );

  observer.observe(catalogo);
}

/* =========================================
   INICIALIZACIÓN
========================================= */

if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

renderProducts();
renderCart();

