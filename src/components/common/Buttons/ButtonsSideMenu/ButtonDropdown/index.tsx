import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'; // Importa o arquivo de estilo
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa o CSS dos ícones
import Link from 'next/link';

interface ButtonDropdownProps {
  name: string;
  options: { name: string; url: string }[]; 
  icone: string;
  isOpen: boolean;
  showSideMenu: boolean
  onToggle: () => void;
}

export default function ButtonDropdown({ name, options, icone, isOpen, onToggle, showSideMenu }: ButtonDropdownProps) {
  return (
    <>
      {
        showSideMenu ? (
          <div className={`accordion-item ${styles.accordionItem}`}>
        <div className={styles.mainContainerAccordionP1}>
          <h2  className={`accordion-header ${styles.accordionHeader}`} id={`heading-${name}`}>
            <button
              className={`accordion-button ${isOpen ? '' : 'collapsed'} ${styles.accordionButton}`}
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls={`collapse-${name}`}
            >
              <i className={`${icone} ${styles.iconPrincipal}`}></i>
              {name}
  
            </button>
          </h2>
          <div
            id={`collapse-${name}`}
            className={`accordion-collapse collapse ${isOpen ? 'show' : ''} ${styles.accordionColapse}`} // Mostra o conteúdo se o estado estiver 'show'
            aria-labelledby={`heading-${name}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div  className={`accordion-body ${styles.accordionBody}`}>
              <ul className={styles.ul}>
                {options.map((e, index) => (
                  <li className={styles.li} key={index}>
                    <Link className={styles.link} href={e.url}>
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
  
  
        <i onClick={onToggle} style={{ cursor: 'pointer' }} className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ${styles.iconArrow}`}></i>
      </div>
        ) : (
          <i style={{margin:'10px'}} className={`${icone} ${styles.iconPrincipal}`}></i>
        )
      }
    </>
    
  );
}
