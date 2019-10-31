class Dinosaur {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    description,
    isCretaceousDinosaurs,
    isJurassicDinosaurs,
    isTriassicDinosaurs
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.isCretaceousDinosaurs = isCretaceousDinosaurs;
    this.isJurassicDinosaurs = isJurassicDinosaurs;
    this.isTriassicDinosaurs = isTriassicDinosaurs;
  }
}

export default Dinosaur;
