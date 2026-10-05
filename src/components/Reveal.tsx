import {
  createElement,
  useEffect,
  useRef,
  useState,
} from "react";
import type {
  AnchorHTMLAttributes,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "pop" | "blur";

interface RevealProps
  extends Omit<HTMLAttributes<HTMLElement>, "children">,
    Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel" | "download"> {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
}

export function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  once = true,
  className,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: [className, visible ? "is-visible" : ""].filter(Boolean).join(" "),
      "data-reveal": variant,
      style: { ...style, "--rv-delay": `${delay}ms` } as CSSProperties,
    },
    children
  );
}
