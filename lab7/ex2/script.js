// Vectorul care va stoca obiectele de tip Produs
let cosCumparaturi = [];

// Elementele DOM
const inputName = document.getElementById('pName');
const inputPrice = document.getElementById('pPrice');
const inputQuantity = document.getElementById('pQuantity');
const productListDiv = document.getElementById('productList');
const grandTotalDisplay = document.getElementById('grandTotal');
const errorDiv = document.getElementById('error-message');

// Event Listeners
document.getElementById('addBtn').addEventListener('click', adaugaProdus);
document.getElementById('clearBtn').addEventListener('click', golesteCos);

function adaugaProdus() {
    errorDiv.textContent = ""; // Resetăm erorile la fiecare încercare

    try {
        const nume = inputName.value.trim();
        const pret = parseFloat(inputPrice.value);
        const cantitate = parseFloat(inputQuantity.value);

        // --- VALIDARE DATE (Tratarea erorilor) ---
        if (nume === "") {
            throw "Eroare: Numele produsului nu poate fi gol!";
        }
        
        if (isNaN(pret) || isNaN(cantitate)) {
            throw "Eroare: Prețul și cantitatea trebuie să fie numere!";
        }

        if (pret <= 0 || cantitate <= 0) {
            throw "Eroare: Prețul și cantitatea trebuie să fie mai mari decât 0!";
        }

        // --- CREARE OBIECT ---
        const produsNou = {
            nume: nume,
            pret: pret,
            cantitate: cantitate,
            // Metodă pentru calcularea valorii (cerința: valoare = pret * cantitate)
            calculValoare: function() {
                return this.pret * this.cantitate;
            }
        };

        // --- ADĂUGARE ÎN VECTOR ---
        cosCumparaturi.push(produsNou);

        // Actualizăm interfața
        afiseazaCos();
        
        // Resetăm input-urile după adăugare
        inputName.value = "";
        inputPrice.value = "";
        inputQuantity.value = "";

    } catch (err) {
        // Afișăm eroarea prinsă în blocul catch
        errorDiv.textContent = err;
    }
}

function afiseazaCos() {
    productListDiv.innerHTML = "";
    let totalGeneral = 0;

    cosCumparaturi.forEach(item => {
        const valoareProdus =
            item.pret * item.cantitate;
        totalGeneral += valoareProdus;

        // Creăm elementul vizual conform exemplului: Nume | Preț: X | Cantitate: Y | Total: Z lei
        const p = document.createElement('p');
        p.className = "product-item";
        p.textContent = `${item.nume} | Preț: ${item.pret} | Cantitate: ${item.cantitate} | Total: ${valoareProdus} lei`;
        productListDiv.appendChild(p);
    });

    grandTotalDisplay.textContent = `TOTAL GENERAL: ${totalGeneral} lei`;
}

function golesteCos() {
    cosCumparaturi = [];
    afiseazaCos();
    errorDiv.textContent = "";
}