const gallery = document.querySelector("#happy-hooves-gallery");

if (gallery) {
  gallery.replaceChildren();
  const fragment = document.createDocumentFragment();

  for (let index = 1; index <= 150; index += 1) {
    if (index === 34 || index === 44 || index === 62 || index === 82 || index === 112 || index === 121 || index === 124 || index === 127) continue;

    const number = String(index).padStart(3, "0");
    const source = `gallery/happy-hooves/visit-${number}.jpeg`;
    const link = document.createElement("a");
    const image = document.createElement("img");

    link.href = source;
    link.setAttribute("aria-label", `Open Happy Hooves photograph ${index}`);
    image.src = source;
    image.alt = `A moment with the Happy Hooves ponies, photograph ${index}`;
    image.loading = "lazy";
    image.decoding = "async";
    link.append(image);
    fragment.append(link);
  }

  gallery.append(fragment);
}
