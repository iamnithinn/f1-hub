"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        w-full fixed top-0 left-0 z-50 
        bg-[#0d0d0f]/80 
        backdrop-blur-md 
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT — F1 logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.img
  src="/f1-logo.png"
  alt="F1 Logo"
  whileHover={{ scale: 1.08 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="
    h-18
    w-auto 
    cursor-pointer
    drop-shadow-[0_0_6px_rgba(255,0,0,0.4)]
  "
/>
        </Link>

        {/* CENTER MENU */}
        <div className="flex items-center gap-10 text-sm font-medium">
          <NavItem label="Drivers" href="/drivers" />
          <NavItem label="Races" href="/races" />
          <NavItem label="Teams" href="/teams" />
          <NavItem label="Predictor" href="/predictor" />
        </div>

      </div>
    </motion.nav>
  );
}


// reusable menu link component
function NavItem({ label, href }: { label: string; href: string }) {
  return (
    <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.15 }}>
      <Link
        href={href}
        className="
          relative py-1 
          text-white/80 hover:text-white 
          transition 
          group
        "
      >
        {label}

        {/* underline hover animation */}
        <span className="
          absolute left-0 -bottom-1 w-0 h-[2px] 
          bg-red-500 transition-all duration-200 
          group-hover:w-full
        "></span>
      </Link>
    </motion.div>
  );
}