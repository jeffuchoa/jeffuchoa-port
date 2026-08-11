import React from "react";
import {
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiFigma,
  SiGit,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

/**
 * Seção "Ferramentas"
 * -------------------------------------------------------
 * - Contém apenas um título e uma esteira (marquee) infinita.
 * - A esteira ocupa 100% da largura da tela (horizontal).
 * - Os itens vêm do array TOOLS abaixo. Para adicionar, remover
 *   ou editar uma ferramenta, basta alterar esse array.
 * - Os ícones vêm da biblioteca "react-icons" (pacote simple-icons,
 *   prefixo "Si"), então não é preciso baixar nenhuma imagem.
 *   Instale com: npm install react-icons
 *
 * Como usar em outro componente:
 *   import FerramentasSection from "./FerramentasSection";
 *   ...
 *   <FerramentasSection />
 */

// -----------------------------------------------------------------
// 1) EDITE AQUI: array/JSON com os itens que vão para a esteira
//    "icon" recebe o componente importado acima, e "color" é a cor
//    oficial da marca (opcional — se omitir, usa a cor padrão).
//    Quando a marca não tem ícone disponível na biblioteca (ex: Adobe
//    XD, removido do simple-icons), use "icon: null" e "label" com a
//    sigla — o componente desenha um badge de texto estilizado no lugar.
// -----------------------------------------------------------------
const TOOLS = [
  { id: 1, name: "React", icon: SiReact, color: "#61DAFB" },
  { id: 2, name: "Vue", icon: SiVuedotjs, color: "#42B883" },
  { id: 3, name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
  { id: 4, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 5, name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { id: 6, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { id: 7, name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { id: 8, name: "Adobe XD", icon: null, label: "Xd", color: "#FF61F6" },
  { id: 9, name: "Git", icon: SiGit, color: "#F05032" },
  { id: 10, name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { id: 11, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 12, name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { id: 13, name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { id: 14, name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
];

export default function FerramentasSection() {
  // Duplicamos o array para criar o efeito de loop contínuo (sem "salto" no final)
  const items = [...TOOLS, ...TOOLS];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Ferramentas</h2>

      <div style={styles.marqueeWrapper}>
        <div style={styles.marqueeTrack} className="ferramentas-marquee-track">
          {items.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div style={styles.item} key={`${tool.id}-${index}`}>
                {Icon ? (
                  <Icon style={styles.icon} color={tool.color || "#f2f2f2"} />
                ) : (
                  <span
                    style={{
                      ...styles.labelBadge,
                      color: tool.color || "#f2f2f2",
                      borderColor: tool.color || "#f2f2f2",
                    }}
                  >
                    {tool.label}
                  </span>
                )}
                <span style={styles.name}>{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animação da esteira e ajuste para pausar no hover (opcional) */}
      <style>{`
        @keyframes ferramentas-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ferramentas-marquee-track {
          animation: ferramentas-scroll 25s linear infinite;
        }
        .ferramentas-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// -----------------------------------------------------------------
// Estilos (inline) — sem depender de arquivo CSS externo
// -----------------------------------------------------------------
const styles = {
  section: {
    width: "100vw",
    marginLeft: "calc(50% - 50vw)", // garante 100% da largura mesmo dentro de containers com padding
    padding: "60px 0",
    background: "#0f0f0f",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "40px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  marqueeWrapper: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  marqueeTrack: {
    display: "flex",
    width: "max-content",
    gap: "48px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 28px",
    background: "#1c1c1c",
    borderRadius: "12px",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  icon: {
    fontSize: "1.6rem",
    width: "1.6rem",
    height: "1.6rem",
    flexShrink: 0,
  },
  labelBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.6rem",
    height: "1.6rem",
    flexShrink: 0,
    border: "2px solid",
    borderRadius: "6px",
    fontSize: "0.85rem",
    fontWeight: 700,
    fontFamily: "system-ui, -apple-system, sans-serif",
    lineHeight: 1,
  },
  name: {
    color: "#f2f2f2",
    fontSize: "1.1rem",
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontWeight: 500,
  },
};