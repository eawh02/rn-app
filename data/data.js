import Category from "../models/category";
import Dinosaur from "../models/dinosaur";

export const CATEGORIES = [
  new Category("c1", "European Dinosaurs", "#f5428d"),
  new Category("c2", "North American Dinosaurs", "#f54242"),
  new Category("c3", "South American Dinosaurs", "#f5a442"),
  new Category("c4", "African Dinosaurs", "#f5d142"),
  new Category("c5", "Madagascar Dinosaurs", "#368dff"),
  new Category("c6", "Asian Dinosaurs", "#41d95d"),
  new Category("c7", "Indian Dinosaurs", "#9eecff"),
  new Category("c8", "Australian Dinosaurs", "#b9ffb0")
];

export const DINOSAURS = [
  new Dinosaur(
    "d1",
    ["c1"],
    "Baryonyx",
    "http://images.dinosaurpictures.org/Baryonyx_sp_1_by_plioart-d4zz0va_477f.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d2",
    ["c1"],
    "Europasaurus",
    "http://images.dinosaurpictures.org/europasaurus_holgeri_by_cheungchungtat-d490kvs_c9e9.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d3",
    ["c1"],
    "Torvosaurus",
    "http://images.dinosaurpictures.org/21-Torvosaurus-attack_6ec9.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d4",
    ["c1"],
    "Ampelosaurus",
    "http://images.dinosaurpictures.org/ampelosaurus_1_by_phillustr8r-d6g6i6w_63bf.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d5",
    ["c1"],
    "Dacentrurus",
    "http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d6",
    ["c2"],
    "Torosaurus",
    "http://images.dinosaurpictures.org/torosaurus-latus-a-prehistoric-era-sergey-krasovskiy_1aa6.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d7",
    ["c2"],
    "Daspletosaurus",
    "http://images.dinosaurpictures.org/daspletosaurus_1_0743.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d8",
    ["c2"],
    "Lythronax",
    "http://images.dinosaurpictures.org/lythronax_by_paleoguy-d6twv8j_927e.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d9",
    ["c2"],
    "Ceratops",
    "http://images.dinosaurpictures.org/ceratops_9a87.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d10",
    ["c3"],
    "Chromogisaurus",
    "http://images.dinosaurpictures.org/chromogisaurus_novasi_by_sebasruna-d5nk614_9786.jpg",
    false,
    false,
    true
  ),
  new Dinosaur(
    "d11",
    ["c3"],
    "Ornithocheirus",
    "http://images.dinosaurpictures.org/Ornithocheirus_BW_f1c8.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d12",
    ["c3"],
    "Laquintasaura",
    "http://images.dinosaurpictures.org/image_2092_1e-Laquintasaura-venezuelae_e673.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d13",
    ["c3"],
    "Gondwanatitan",
    "http://images.dinosaurpictures.org/gondwanatitan_faustoi_by_vasix-d4q2rf5_c980.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d14",
    ["c4"],
    "Antetonitrus",
    "http://images.dinosaurpictures.org/Antetonitrus-commander-salamander_dbf6.jpg",
    false,
    false,
    true
  ),
  new Dinosaur(
    "d15",
    ["c4"],
    "Rugops",
    "http://images.dinosaurpictures.org/Rugops1_c149.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d16",
    ["c4"],
    "Cetiosaurus",
    "http://images.dinosaurpictures.org/Cetiosaurus_b6b6.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d17",
    ["c4"],
    "Dsungaripterus",
    "http://images.dinosaurpictures.org/Dsungaripterus_20130716_b49d.jpg",
    true,
    true,
    false
  ),
  new Dinosaur(
    "d18",
    ["c5"],
    "Rahonavis",
    "http://images.dinosaurpictures.org/Rahonavis_405e.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d19",
    ["c5"],
    "Lapparentosaurus",
    "http://images.dinosaurpictures.org/lapparentosaurusGE_bbc5.jpg",
    false,
    true,
    false
  ),
  new Dinosaur(
    "d20",
    ["c6"],
    "Microraptor",
    "http://images.dinosaurpictures.org/microraptor_mny_91bb.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d21",
    ["c6"],
    "Zhejiangopterus",
    "http://images.dinosaurpictures.org/Zhejiangopterus-by-Raul-Lunia_cfa6.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d22",
    ["c7"],
    "Indosaurus",
    "http://images.dinosaurpictures.org/Indosaurus_0408.jpg",
    true,
    false,
    false
  ),
  new Dinosaur(
    "d23",
    ["c8"],
    "Leaellynasaura",
    "http://images.dinosaurpictures.org/leaellynasaura_dbab.jpg",
    true,
    false,
    false
  )
];
