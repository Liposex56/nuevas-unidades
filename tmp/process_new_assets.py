from pathlib import Path

from PIL import Image, ImageOps, ImageDraw


SOURCE = Path(r"C:\Users\profe\.codex\generated_images\019ea428-b48b-78b0-accf-46c3cde5f7c4")
DESTINATION = Path(r"C:\Users\profe\OneDrive\Desktop\Gestion del Conocimiento - Caso Interactivo\Recursos\nuevo")

ASSETS = [
    ("ig_042c2c53a87654f6016a3d701dc050819182a75ec1caec49c0.png", "companero-nexo.webp", 640),
    ("ig_042c2c53a87654f6016a3d7072a39081919a2ae7ee51adbe0e.png", "companera-vera.webp", 640),
    ("ig_042c2c53a87654f6016a3d70c4cb848191892f33f4fab0a510.png", "companero-prisma.webp", 640),
    ("ig_042c2c53a87654f6016a3d711970c481918e7d0764c32ee002.png", "companero-kubo.webp", 640),
    ("ig_0b6a8ec6514afc97016a3d71a17ea8819c8f2fdff5892a5f19.png", "ar-capital-humano.webp", 900),
    ("ig_0b6a8ec6514afc97016a3d71f7c9d8819c9bde86e90339b508.png", "ar-capital-intelectual.webp", 900),
    ("ig_0b6a8ec6514afc97016a3d7245ad84819cb9ff5d8af92ae110.png", "ar-capital-relacional.webp", 900),
    ("ig_0b6a8ec6514afc97016a3d729541b0819c97fa8fddad55756c.png", "ar-ecosistema-digital.webp", 900),
]


def prepare_asset(source_name: str, destination_name: str, size: int) -> Image.Image:
    image = Image.open(SOURCE / source_name).convert("RGB")
    image = ImageOps.fit(image, (size, size), method=Image.Resampling.LANCZOS)
    image.save(DESTINATION / destination_name, "WEBP", quality=86, method=6)
    return image


def create_contact_sheet(images: list[tuple[str, Image.Image]]) -> None:
    tile_size = 280
    label_height = 40
    sheet = Image.new("RGB", (tile_size * 4, (tile_size + label_height) * 2), "#071225")
    draw = ImageDraw.Draw(sheet)
    for index, (name, image) in enumerate(images):
        x = (index % 4) * tile_size
        y = (index // 4) * (tile_size + label_height)
        preview = ImageOps.fit(image, (tile_size, tile_size), method=Image.Resampling.LANCZOS)
        sheet.paste(preview, (x, y))
        draw.rectangle((x, y + tile_size, x + tile_size, y + tile_size + label_height), fill="#101d31")
        draw.text((x + 10, y + tile_size + 12), name, fill="#f7f9ff")
    sheet.save(DESTINATION / "vista-conjunta.png", "PNG", optimize=True)


def main() -> None:
    DESTINATION.mkdir(parents=True, exist_ok=True)
    processed = []
    for source_name, destination_name, size in ASSETS:
        processed.append((destination_name, prepare_asset(source_name, destination_name, size)))
    create_contact_sheet(processed)


if __name__ == "__main__":
    main()
