import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  variant?: "floating" | "inline";
}

const WHATSAPP_URL = "https://wa.me/916238478283?text=Hi%20ZOR%20Visuals,%20I%20want%20to%20enquire%20about%20your%20videography%20services";

export function WhatsAppButton({ className, variant = "floating" }: WhatsAppButtonProps) {
  if (variant === "floating") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-8 right-8 z-[60] flex items-center gap-3 px-6 py-3.5 bg-gold text-primary-foreground rounded-full shadow-gold hover:bg-gold-deep hover:scale-105 transition-all duration-300 animate-fade-in group",
          className
        )}
        style={{ boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--gold) 50%, transparent)" }}
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs tracking-luxury font-medium">Chat on WhatsApp</span>
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-xs tracking-luxury text-foreground hover:bg-gold hover:text-primary-foreground transition-all duration-500",
        className
      )}
    >
      <MessageCircle className="w-4 h-4" />
      Enquire on WhatsApp
    </a>
  );
}
