const gallery = document.querySelector("#happy-hooves-gallery");

if (gallery) {
  gallery.replaceChildren();
  const fragment = document.createDocumentFragment();

  const photos = [];

  for (let index = 1; index <= 150; index += 1) {
    if (index === 34 || index === 44 || index === 62 || index === 82 || index === 112 || index === 121 || index === 124 || index === 127) continue;

    const number = String(index).padStart(3, "0");
    const source = `gallery/happy-hooves/visit-${number}.jpeg`;
    photos.push(source);
  }

  photos.push(
    "gallery/happy-hooves/0f6aae4e-c186-4258-a1ba-60c3f8bd0d46.jpg",
    "gallery/happy-hooves/6508c2ea-4ea5-4390-8c3d-8a3490355219.jpg",
    "gallery/happy-hooves/769d4e58-e201-4e1f-b103-504ce9cd1c0a.jpg",
    "gallery/happy-hooves/aa51db08-d19c-4e34-b7b0-cc3ff9f438ea.jpg",
    "gallery/happy-hooves/bb9acae4-e805-43a1-880f-1a473aa0a501.jpg",
    "gallery/happy-hooves/d1b1b647-1f02-4229-a5a5-60b656c9d936.jpg",
    "gallery/happy-hooves/fef00c27-feb1-490f-8ed6-c474c9429ce4.jpg"
  );

  photos.forEach((source, photoIndex) => {
    const index = photoIndex + 1;
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
  });

  gallery.append(fragment);

  const videoGrid = document.querySelector(".horse-work-grid");
  const lastVideo = videoGrid?.lastElementChild;

  if (lastVideo && videoGrid.children.length % 3 === 1 && gallery.children.length >= 2) {
    const leftPhoto = gallery.children[0];
    const rightPhoto = gallery.children[1];
    leftPhoto.classList.add("gallery-photo-card");
    rightPhoto.classList.add("gallery-photo-card");
    videoGrid.insertBefore(leftPhoto, lastVideo);
    videoGrid.append(rightPhoto);
    gallery.classList.add("continues-video-grid");
  }
}
