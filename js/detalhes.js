      // Função para obter os parâmetros da URL
      function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
          nome: params.get("nome"),
          descricao: params.get("descricao"),
          preco: params.get("preco"),
          img: params.get("img"),
        };
      }

      // Função para preencher os detalhes do produto
      function preencherDetalhes() {
        const { nome, descricao, preco, img } = getQueryParams();
        document.getElementById("produto-nome").textContent = nome;
        document.getElementById("produto-descricao").textContent = descricao;
        document.getElementById("produto-preco").textContent = preco;
        document.getElementById("produto-imagem").src = img;
      }

      // Preencher os detalhes quando a página estiver carregada
      document.addEventListener("DOMContentLoaded", preencherDetalhes);