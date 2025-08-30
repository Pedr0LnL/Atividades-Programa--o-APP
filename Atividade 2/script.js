document.addEventListener('DOMContentLoaded', function() {
    // Elementos dos quadrantes
    const quadrants = document.querySelectorAll('.quadrant');
    const profileQuadrant = document.getElementById('profile-quadrant');
    
    // Elementos do modal
    const profileModal = document.getElementById('profileModal');
    const closeModal = document.getElementById('closeModal');
    const saveProfile = document.getElementById('saveProfile');
    const cancelEdit = document.getElementById('cancelEdit');
    
    // Campos do formulário
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profilePhone = document.getElementById('profilePhone');
    const profileBio = document.getElementById('profileBio');
    const profileLocation = document.getElementById('profileLocation');
    
    // Valores originais para restaurar em caso de cancelamento
    let originalValues = {};
    
    // Função para abrir o modal
    function openProfileModal() {
        profileModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Previne scroll da página
        
        // Salvar valores originais
        originalValues = {
            name: profileName.value,
            email: profileEmail.value,
            phone: profilePhone.value,
            bio: profileBio.value,
            location: profileLocation.value
        };
        
        // Focar no primeiro campo
        profileName.focus();
    }
    
    // Função para fechar o modal
    function closeProfileModal() {
        profileModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura scroll da página
    }
    
    // Função para restaurar valores originais
    function restoreOriginalValues() {
        profileName.value = originalValues.name;
        profileEmail.value = originalValues.email;
        profilePhone.value = originalValues.phone;
        profileBio.value = originalValues.bio;
        profileLocation.value = originalValues.location;
    }
    
    // Event listeners para o modal
    profileQuadrant.addEventListener('click', function() {
        // Efeito de clique
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Abrir modal
        openProfileModal();
    });
    
    closeModal.addEventListener('click', closeProfileModal);
    
    // Fechar modal ao clicar fora dele
    profileModal.addEventListener('click', function(e) {
        if (e.target === profileModal) {
            closeProfileModal();
        }
    });
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && profileModal.style.display === 'block') {
            closeProfileModal();
        }
    });
    
    // Salvar perfil
    saveProfile.addEventListener('click', function() {
        // Aqui você pode adicionar validação dos campos
        if (profileName.value.trim() === '') {
            alert('Por favor, preencha o nome!');
            profileName.focus();
            return;
        }
        
        if (profileEmail.value.trim() === '') {
            alert('Por favor, preencha o email!');
            profileEmail.focus();
            return;
        }
        
        // Simular salvamento
        this.textContent = 'Salvando...';
        this.disabled = true;
        
        setTimeout(() => {
            // Atualizar valores originais
            originalValues = {
                name: profileName.value,
                email: profileEmail.value,
                phone: profilePhone.value,
                bio: profileBio.value,
                location: profileLocation.value
            };
            
            // Feedback visual
            this.textContent = 'Perfil Salvo!';
            this.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                this.textContent = 'Salvar Perfil';
                this.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                this.disabled = false;
                closeProfileModal();
            }, 1500);
        }, 1000);
    });
    
    // Cancelar edição
    cancelEdit.addEventListener('click', function() {
        restoreOriginalValues();
        closeProfileModal();
    });
    
    // Efeitos nos quadrantes
    quadrants.forEach(quadrant => {
        // Efeito de hover
        quadrant.addEventListener('mouseenter', function() {
            if (this !== profileQuadrant) {
                this.style.transform = 'scale(1.02)';
            }
        });
        
        quadrant.addEventListener('mouseleave', function() {
            if (this !== profileQuadrant) {
                this.style.transform = 'scale(1)';
            }
        });
        
        // Efeito de clique para outros quadrantes
        if (quadrant !== profileQuadrant) {
            quadrant.addEventListener('click', function() {
                // Efeito de clique
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                // Destaque do quadrante selecionado
                quadrants.forEach(q => q.style.border = 'none');
                this.style.border = '3px solid #87CEEB';
                
                // Remover destaque após 2 segundos
                setTimeout(() => {
                    this.style.border = 'none';
                }, 2000);
            });
        }
    });
    
    // Animações de entrada
    function animateEntrance() {
        quadrants.forEach((quadrant, index) => {
            quadrant.style.opacity = '0';
            quadrant.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                quadrant.style.transition = 'all 0.6s ease';
                quadrant.style.opacity = '1';
                quadrant.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Iniciar animações
    setTimeout(animateEntrance, 300);
    
    // Adicionar efeito de ondulação ao clicar
    function createRipple(event) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Adicionar efeito de ondulação aos quadrantes
    quadrants.forEach(quadrant => {
        quadrant.addEventListener('click', createRipple);
    });
    
    // Validação em tempo real dos campos
    profileName.addEventListener('input', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#4CAF50';
        }
    });
    
    profileEmail.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value.trim() === '' || !emailRegex.test(this.value)) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#4CAF50';
        }
    });
    
    profilePhone.addEventListener('input', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = '#4CAF50';
        }
    });
});

// Adicionar estilos CSS para o efeito de ondulação
const style = document.createElement('style');
style.textContent = `
    .quadrant {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
