<script setup>
import {FontAwesomeIcon as FaIcon} from "@fortawesome/vue-fontawesome";
import {onUpdated, useTemplateRef} from "vue";

const props = defineProps({
  height: {
    type: Number,
    default: 300,
  },
  width: {
    type: Number,
    default: 600,
  },
  show: {
    type: Boolean,
    required: true
  },
  button: Object,
})

const modalRef = useTemplateRef("modal");
const headerRef = useTemplateRef("header");

const getModalPosition = (modalWidth, modalHeight, button) => {
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  let position = {
    left: (viewportWidth - modalWidth) / 2,
    top: (viewportHeight - modalHeight) / 2
  }

  if (button) {
    const buttonRect = button.getBoundingClientRect();

    const space = {
      top: buttonRect.top - modalHeight,
      bottom: viewportHeight - buttonRect.bottom - modalHeight,
      left: buttonRect.left - modalWidth,
      right: viewportWidth - buttonRect.right - modalWidth
    };

    // Place below
    position = {
      left: buttonRect.left,
      top: buttonRect.bottom,
    };
    if (space.bottom < 0 && space.top > space.bottom) {
      // Place above
      position = {
        left: buttonRect.left,
        top: buttonRect.top - modalHeight,
      };
    } else if (space.right < 0 && space.left > space.right) {
      // Place left
      position = {
        left: buttonRect.left - modalWidth,
        top: buttonRect.top,
      };
    } else if (space.left < 0 && space.right > space.left) {
      // Place right
      position = {
        left: buttonRect.right,
        top: buttonRect.top,
      };
    }
  }
  return position;
}

const style = () => {
  const position = getModalPosition(props.width, props.height, props.button)
  return `height: ${props.height}px;
          width: ${props.width}px;
          left: ${position.left}px;
          top: ${position.top}px;`
}

const enableDrag = (dragHandle, movableElement) => {
  const setPosition = (x, y) => {
    movableElement.style.left = `${x}px`;
    movableElement.style.top = `${y}px`;
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

  const handleMouseDown = (downEvent) => {
    const offsetX = downEvent.clientX - movableElement.offsetLeft;
    const offsetY = downEvent.clientY - movableElement.offsetTop;

    const handleMouseMove = (moveEvent) => {
      const rawLeft = moveEvent.clientX - offsetX;
      const rawTop = moveEvent.clientY - offsetY;

      const maxX = document.documentElement.clientWidth - movableElement.offsetWidth;
      const maxY = document.documentElement.clientHeight - movableElement.offsetHeight;

      const clampedLeft = clamp(rawLeft, 0, maxX);
      const clampedTop = clamp(rawTop, 0, maxY);

      setPosition(clampedLeft, clampedTop);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  dragHandle.addEventListener('mousedown', handleMouseDown);
};

onUpdated(() => {
  if (props.show) {
    enableDrag(headerRef.value, modalRef.value);
  }
})
</script>

<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="show" class="modal-overlay">
        <div ref="modal" class="modal-container" :style="style()">
          <div ref="header" class="modal-header">
            <slot name="header"/>
            <button class="button scale" @click="$emit('close')">
              <fa-icon icon="x"/>
            </button>
          </div>
          <div class="modal-content">
            <slot name="content"/>
          </div>
          <div class="modal-footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #0000004C;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: fixed;
  background-color: var(--mantle);
  color: #fff;
  box-shadow: 0 2px 8px #0000004C;
  z-index: 101;
  border-radius: 5px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s ease,
              transform 0.3s ease;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
}

.modal-content {
  overflow: auto;
  padding: 16px;
}

.modal-footer {
  padding: 8px 16px 16px 16px;
}

.button {
  color: var(--green);
  transition: transform 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: var(--light-green);
  }
}

.scale:hover {
  transform: scale(1.5);
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>