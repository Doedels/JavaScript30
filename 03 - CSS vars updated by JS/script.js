
const handleUpdate = (e) => {
    const unit = e.target.dataset.unit || "";
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + unit);
}

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("input", handleUpdate)
})

