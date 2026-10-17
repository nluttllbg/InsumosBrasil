/**
 * ==========================================================================
 * AGRO BRASIL INSUMOS AGRÍCOLA - Script Oficial (script.js)
 * Interatividade limpa, moderna, sem frameworks, 100% compatível com GitHub Pages
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Constantes e Dados Oficiais
  const WHATSAPP_PHONE = '556699805400';
  const DEFAULT_WA_MESSAGE = 'Olá, gostaria de saber mais sobre os insumos e soluções da Agro Brasil.';
  
  // URLs de fallback garantidas caso o usuário hospede sem os arquivos locais
  const CDN_FALLBACKS = {
    '15591.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1KKXDZfVVvdrGWePKDQLhTxFclgJZG5OI5mvwZfxcuKNs_D-m0tYGD_uQn0eiq_18g9FGeRR96lX_tRh6GCq2bjF50fe6je82f4oCNgvmS8FXO9huxFyjFVWNXkncQfyO0XsqcSqeEftzKieaosmajRxECR9WW9YHHGM8Qj_HJcEluPHl_Lu80jsPXGc8fSe_Ebb4TwgadBsZ4bIQY0STd22xI3KKsN1TiYbPS4ZiSPowjbs5c9xc9hgfp8c799OY6Gk',
    '15587.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDMqv1_v-uXmrxToc2RM7oN2O9c_lMGDGmV-v6A0Kz3M8BBi2xc3lxALkoJMWcY96jdmSfaXvvaR6ITau-wjCvSOzw4-Br6Zi5t78nknZnHuJazb4yXetiZerrM76gqlfzTovwg7QkbmzQDdy8QFa6p3vWucZL5CxEJxbAurXho5XtuyqqRhHCfcQFhrdvRLzfSYTKrw7yJArPjGly-wQGnt8kHacNIK51WUkXB5kbfnPtPN1XOBmkcppQz9zn9aZ1lvI',
    '15623.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWB8Njr2ecjX3Aw2R7Sk6kV-dRZqV3SkQXT6b1n8_Um0vZhV8LDFrA83zz_tin48hNOlDHn5X5RMRVY9gZZm82V-czNpPrZBGTdOGbe9feA2Oo7Yr5GsQrCXSQjBNDS4XlbzMQrjIk1lf1qW12vQX2h5-zVHCMF2xQIUR7nh1zXwGVlBC7cJeIDra6w58ZZw_vlLYBZWMXtKCHO_7YfMLwPT-u_C-0T68V1mnIwkP1juiJ7osl-mQRyxqzoaOHbmyHkMA',
    '15621.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKP2QwdqYBHymrIKSM4FWIGmRhqjzQWBZNtQB7RkEvoBzU1qF6vDYJ5MoEcwB6Ql69Fra5JTW_jv-Xh7f1Vk_05V48eKqFoqtTIrApQy7JTQcbj4HmoPa0JeF2KDwhvacR-MvOCpuOIYH155JJ2spe-2uxFXRUEUD3htLQsvVHZPiCNspxngtQ6inE9UyWMonsjfMOlQBvdjkNTqwFCPzfWiMYGffI6Hm0DfqdqPBjaZBW-P1oGAPbyWPg13UCsbb73Dg',
    '15619.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGoEkycDPZ_BsdU3jCrIO81T0n5S7zsNds5wPxHHhwAAiZigzVaXPeLD5ClACxCj90OQRq5mfnACdXPmmbyurq9l5H3OI8A_t3gzXIb2pS7YSrWNwl4MMpkSn6OE6s4xauNXMSqtCpDuIC00PapLSYp7uQ75RcUa9_ddBv0Ubk7_priZamXY4z7mXUTiH37foj9UtyVz2L8BsRxKINJYdvKt29JC_m5tUtpugtBD3EPN5mXf5Jvh_b4X8pMSvFxEmbIs',
    '15593.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOg99MZP4wDCw0yjHXKqo0D3YhxUCLPZS8CQCXV5cZ9UVe6pAQQnHjFTsFh6xVxeNWtLvVd7wXQSJzfSNYj863_5QbaeM5V2uXY6_GkPOYDe0exxMh1iBuxgALWPZU9BqfJGoDoAOcQfuEQpTrQz5LfApxpb3z6Dxg5Tp9BfCsiz8Jv_0MYyNegmd774tyXRJ7ilhfofMjGZrHmBJT6z1FBy8WVIaRDO2gWqu7CMpcj5gEUw2XET-_ru8OGrH3jYH6xJY',
    '15589.jpg': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxk-hjp7WKPrbc7ex-ieNy_vX_4ZOSclnRNiP9YAuV0p4KVRfVFn7ztusflWyTSgDfc3afxB4tLt0MFHulRlHDkIGRNNC36FSWNAe0iPXNTI8yobRhmwzuK_sDg-2PiiBNcflNzyXUf-XNJZtmX1GGmhqpYkyB9UA8h3dL2wqectg-kxclG5vx-n6AEz-hiw00TUIAjr7m8f1xj1J_Rmr1Dlxq4GvQQyh3icsW1P3IxNvwd4C-Dq7WFeuwUiTd1KllAMg'
  };

  // 2. Proteção e Fallback de Imagens
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function () {
      const src = this.getAttribute('src') || '';
      for (const [key, fallbackUrl] of Object.entries(CDN_FALLBACKS)) {
        if (src.includes(key)) {
          this.src = fallbackUrl;
          break;
        }
      }
    });
  });

  // 3. Cabeçalho Dinâmico ao Rolar (Sticky Glassmorphism)
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Menu Mobile Interativo (Drawer)
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar menu mobile ao clicar em um link interno
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fechar ao pressionar ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 5. Rolagem Suave para Âncoras
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // 6. Filtro Interativo do Catálogo de Produtos
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        productCards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'todos' || cardCat === category) {
            card.style.display = 'flex';
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.opacity = '1';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Calculadora de Incremento de Produtividade (Simulador de Safra)
  const calcHaInput = document.getElementById('calcHectares');
  const calcHaLabel = document.getElementById('calcHaValue');
  const calcCropSelect = document.getElementById('calcCrop');
  const resultSacas = document.getElementById('resultSacas');
  const resultTotalSacas = document.getElementById('resultTotalSacas');
  const resultEstimatedValue = document.getElementById('resultEstimatedValue');
  const calcWaButton = document.getElementById('calcWaButton');

  function updateCalculator() {
    if (!calcHaInput || !calcCropSelect) return;

    const ha = parseInt(calcHaInput.value, 10) || 500;
    const cropType = calcCropSelect.value;

    if (calcHaLabel) calcHaLabel.textContent = `${ha.toLocaleString('pt-BR')} ha`;

    // Parâmetros médios validados no cerrado
    let gainPerHa = 5.5; // Soja média (+5.5 sc/ha)
    let pricePerSaca = 125; // R$ por saca

    if (cropType === 'milho') {
      gainPerHa = 8.0;
      pricePerSaca = 58;
    } else if (cropType === 'algodao') {
      gainPerHa = 12.0; // arrobas
      pricePerSaca = 140;
    }

    const totalGainSacas = Math.round(ha * gainPerHa);
    const totalGrossGain = totalGainSacas * pricePerSaca;

    if (resultSacas) resultSacas.textContent = `+${gainPerHa.toFixed(1)} ${cropType === 'algodao' ? '@' : 'sc'}/ha`;
    if (resultTotalSacas) resultTotalSacas.textContent = `+${totalGainSacas.toLocaleString('pt-BR')} ${cropType === 'algodao' ? 'arrobas' : 'sacas'}`;
    if (resultEstimatedValue) {
      resultEstimatedValue.textContent = `R$ ${totalGrossGain.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }

    if (calcWaButton) {
      const textMsg = encodeURIComponent(
        `Olá Agro Brasil! Simulei meu ganho na safra (${ha} ha de ${cropType}) e gostaria de um plano agronômico personalizado para atingir o incremento projetado de ${totalGainSacas.toLocaleString('pt-BR')} sacas.`
      );
      calcWaButton.href = `https://wa.me/${WHATSAPP_PHONE}?text=${textMsg}`;
    }
  }

  if (calcHaInput && calcCropSelect) {
    calcHaInput.addEventListener('input', updateCalculator);
    calcCropSelect.addEventListener('change', updateCalculator);
    updateCalculator();
  }

  // 8. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Fecha outros abertos
        faqItems.forEach((other) => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 9. Formulário de Atendimento Direto ao WhatsApp
  const contactForm = document.getElementById('agroContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || 'Produtor Rural';
      const farm = document.getElementById('formFarm')?.value.trim() || 'Fazenda Regional';
      const culture = document.getElementById('formCulture')?.value || 'Soja';
      const area = document.getElementById('formArea')?.value.trim() || 'Área não informada';
      const notes = document.getElementById('formNotes')?.value.trim() || 'Gostaria de uma visita técnica.';

      const message = `Olá equipe Agro Brasil!
Meu nome é ${name} (${farm}).
Tenho interesse em insumos e biotecnologia para ${culture} (área estimada: ${area} ha).
Detalhes: ${notes}
Aguardo contato do agrônomo responsável!`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 10. Lightbox Modal para Fotos de Campo e Sede
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  function openModal(src, caption) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalCaption) modalCaption.textContent = caption || 'Agro Brasil Insumos Agrícola';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-zoom-image]').forEach((trigger) => {
    trigger.addEventListener('click', function () {
      const img = this.querySelector('img') || this;
      const caption = this.getAttribute('data-caption') || img.getAttribute('alt') || '';
      openModal(img.src, caption);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Log de inicialização limpa
  console.log('Agro Brasil Insumos Agrícola - Sistema web carregado com sucesso.');
});
