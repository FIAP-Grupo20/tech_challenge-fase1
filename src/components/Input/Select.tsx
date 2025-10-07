import { iSelect } from "@/types/iSelect";
import { Form } from "react-bootstrap";

export default function SelectComponente(props: iSelect) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {props.label && (
        <Form.Label
          htmlFor={props.id}
          style={{ fontWeight: "600", fontSize: "16px", color: "var(--cinza)" }}
        >
          {props.label}
        </Form.Label>
      )}
      <Form.Select
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        disabled={props.disabled}
        style={{
          height: props.height || "48px",
          width: props.width || "100%",
          margin: props.marign || "0",
          padding: props.padding || "12px 16px",
          backgroundColor: props.backgroundColor || "var(--branco)",
          border: props.border || "1px solid var(--azul)",
          borderRadius: props.borderRadius || "8px",
          color: props.color || "#444444",
          fontSize: props.fontSize || "16px",
          textAlign: props.textAlign || "left",
        }}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
