// MobileMenu.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

// Styled Components
const MenuButton = styled.button`
  padding: 0.75rem;
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  background-color: #1f2937; /* gray-800 */
  color: white;
  border-radius: 0.375rem;
  z-index: 50;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 16rem; /* 64 */
  background-color: #111827; /* gray-900 */
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 40;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.3);
  a {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    color: white;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #9ca3af; /* gray-400 */
    }
  }
`;

// const MenuLink = styled.a`
//   margin-bottom: 1rem;
//   font-size: 1.125rem;
//   color: white;
//   text-decoration: none;
//   transition: color 0.2s ease-in-out;

//   &:hover {
//     color: #9ca3af; /* gray-400 */
//   }
// `;

// Framer Motion Variants
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: { x: "100%", opacity: 0, transition: { type: "tween", duration: 0.3 } },
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuButton onClick={toggleMenu}>{isOpen ? "✕" : "☰"}</MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MenuNav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link to="#home">Home</Link>
            <Link to="/#aboutUs" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/#ourServices">Services</Link>
            <Link to="/#contactUs">Contact Us</Link>
            <Link to="/#joinNow">Join Us</Link>
            <Link to="/#faQ">FAQ</Link>
          </MenuNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
