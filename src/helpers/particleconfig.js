const config = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: false,
        value_area: 500
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "",
      stroke: {
        width: 0,
        color: "#fff"
      },
      polygon: {
        nb_sides: 10
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#fff",
      opacity: 0.2,
      width: 2
    },
    move: {
      enable: true,
      direction: "none",
      random: false,
      straight: false,
      attract: {
        enable: false,
        rotateX: 250,
        rotateY: 250
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: false
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.1
        }
      },
      bubble: {
        distance: 800,
        size: 40,
        opacity: 1,
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
};

export default config;