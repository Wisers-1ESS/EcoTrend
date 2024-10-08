const produtos = {
    roupas: [
      {
        nome: "Camisa Eco Conforto",
        descricao:
          "Camisa feita com algodão 100% orgânico, sem o uso de pesticidas ou produtos químicos, proporcionando conforto e suavidade.",
        preco: "R$ 129,90",
        img: "https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/c/a/camiseta-de-algodao-preta.jpg",
      },
      {
        nome: "Bolsa Verde Juta",
        descricao:
          "Bolsa confeccionada com fibras de juta, um material biodegradável e resistente, ideal para o dia a dia.",
        preco: "R$ 79,90",
        img: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsbfktaq213h76_tn",
      },
      {
        nome: "Tênis EcoWalk",
        descricao:
          "Tênis casual feito de borracha reciclada e tecidos reutilizados, oferecendo estilo e sustentabilidade em um só produto.",
        preco: "R$ 199,90",
        img: "https://images.tcdn.com.br/img/img_prod/707677/tenis_vegano_shoes_street_preto_camara_de_ar_977_1_4a47077ed2625415487122fa7b6a6da4.jpg",
      },
      {
        nome: "Relógio Natural Time",
        descricao:
          "Relógio artesanal feito de madeira sustentável certificada, com pulseira de couro vegano.",
        preco: "R$ 249,90",
        img: "https://woodz.com.br/cdn/shop/products/Eko_marine_1_860x.jpg?v=1615102251",
      },
    ],
    cuidados: [
      {
        nome: "Sabonete Lavanda Natural",
        descricao:
          "Sabonete natural feito com óleos essenciais de lavanda, sem parabenos e sulfatos, para uma limpeza suave.",
        preco: "R$ 19,90",
        img: "https://www.cheirodemato.eco.br/wp-content/uploads/2022/11/Fotos-para-site-Cheiro-de-Mato-14.png",
      },
      {
        nome: "Hidratante Natural Ginseng",
        descricao:
          "Hidratante corporal com manteiga de karité orgânica, ideal para peles secas e sensíveis, com fragrância leve e natural.",
        preco: "R$ 45,90",
        img: "https://images.tcdn.com.br/img/img_prod/734193/hidratante_corporal_natural_ginseng_e_geranio_manteiga_de_karite_oe_de_lavanda_e_pantenol_mami_care_265_1_2d2612d59b29b7a57a40afb32c817033_20230428093842.jpg",
      },
      {
        nome: "Shampoo FreshMint",
        descricao:
          "Shampoo sólido sem embalagem plástica, com óleo essencial de menta, perfeito para cabelos oleosos.",
        preco: "R$ 29,90",
        img: "https://phytoervas.vteximg.com.br/arquivos/ids/156017-1000-1000/shampoo-controle-de-oleosidade-gengibre-e-menta-phytoervas-250ml.png?v=637172279921730000",
      },
      {
        nome: "Bioart Protetor Solar",
        descricao:
          "Protetor solar facial à base de minerais, sem químicos agressivos, oferecendo proteção UV com ingredientes naturais.",
        preco: "R$ 59,90",
        img: "https://useorganico.vtexassets.com/arquivos/ids/168753/protetor-solar-natural-vegano-co.jpg?v=637896983534530000",
      },
    ],
    casa: [
      {
        nome: "EcoBamboo Copo",
        descricao:
          "Copo portátil feito de bambu, biodegradável e reutilizável, ideal para bebidas quentes e frias.",
        preco: "R$ 39,90",
        img: "https://lojanebrindes.com.br//img/produtos/Copo-de-viagem-emFibra-de-bambu-380ml-7157-1674224751.jpg",
      },
      {
        nome: "Escova BioBambu",
        descricao:
          "Escova de dentes feita com cabo de bambu, com cerdas macias de nylon biodegradável, uma alternativa ao plástico.",
        preco: "R$ 14,90",
        img: "https://cdn.awsli.com.br/2626/2626263/produto/228017591eea08192de.jpg",
      },
      {
        nome: "Toalha EcoSoft",
        descricao:
          "Toalha de banho feita com algodão 100% orgânico, super macia e livre de produtos químicos.",
        preco: "R$ 79,90",
        img: "https://images.tcdn.com.br/img/img_prod/600194/toalha_de_banho_buddemeyer_avulsa_organic_100_algodao_5189_2_20200821220004.jpg",
      },
      {
        nome: "Filtro Café Verde",
        descricao:
          "Filtro de café feito com tecido reutilizável, ideal para quem quer reduzir o consumo de filtros descartáveis.",
        preco: "R$ 24,90",
        img: "https://agatamarket.com/cdn/shop/products/Arquivo_000_3_545x.png?v=1656436580",
      },
    ],
    tecnologia: [
      {
        nome: "SolarPower Charge",
        descricao:
          "Carregador de dispositivos eletrônicos movido a energia solar, com alta capacidade de carga e compatível com diversos dispositivos.",
        preco: "R$ 199,90",
        img: "https://img.ltwebstatic.com/images3_spmp/2024/05/30/f3/17170405943d6612d87a32b1273f58bf3727fda72b_thumbnail_720x.jpg",
      },
      {
        nome: "EcoLight LED",
        descricao:
          "Lâmpada LED inteligente de baixo consumo, com ajuste de intensidade e controle por aplicativo, ideal para economizar energia.",
        preco: "R$ 89,90",
        img: "https://images.tcdn.com.br/img/img_prod/1195512/lampada_smart_wifi_led_inteligente_color_rgb_luz_branca_quente_e_fria_alexa_google_12w_bivolt_75_1_471c3cd9f8fbd08a73401edbd4bfe31e.jpg",
      },
      {
        nome: "GreenEnergy Powerbank",
        descricao:
          "Powerbank feito com materiais reciclados e carregamento via energia solar, ideal para quem busca sustentabilidade em tecnologia.",
        preco: "R$ 159,90",
        img: "https://m.media-amazon.com/images/I/81K1N8dY6gL._AC_UF350,350_QL80_.jpg",
      },
      {
        nome: "Fone Fairbuds XL",
        descricao:
          "Fone de ouvido wireless feito com materiais reciclados, com tecnologia de cancelamento de ruído ativo e autonomia de 30 horas.",
        preco: "R$ 299,90",
        img: "https://t2.tudocdn.net/667817?w=1000&fit=clip",
      },
    ],
  };


  function criarCard(produto) {
    return `
  <div class="col">
    <div class="card h-100">
      <img src="${produto.img}" class="card-img-top" alt="${produto.nome}" />
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title">${produto.nome}</h5>
        <p class="card-text">${produto.descricao}</p>
        <div class="actions">
          <a href="detalhes.html?nome=${encodeURIComponent(produto.nome)}&descricao=${encodeURIComponent(produto.descricao)}&preco=${encodeURIComponent(produto.preco)}&img=${encodeURIComponent(produto.img)}" class="btn btn-primary w-100 mb-2">${produto.preco}</a>
          <a href="#" class="btn btn-secondary w-100">Adicionar ao carrinho</a>
       </div>
      </div>
    </div>
  </div>
`;
  }


  function renderizarProdutos() {
    Object.keys(produtos).forEach((categoria) => {
      const container = document.querySelector(`.${categoria} .row`);
      let cards = "";
      produtos[categoria].forEach((produto) => {
        cards += criarCard(produto);
      });
      container.innerHTML = cards;
    });
  }


  document.addEventListener("DOMContentLoaded", renderizarProdutos);