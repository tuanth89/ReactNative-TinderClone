import React, {PureComponent} from 'react';
import Swiper from 'react-native-deck-swiper';
import {AppColorPallete} from '../../theme';

const STACK_SIZE = 3;
const STACK_SEPERATION = 15;
const OVERLAY_LABELS_OBJ = {
  bottom: {
    title: 'BLEAH',
    style: {
      label: {
        backgroundColor: 'black',
        borderColor: 'black',
        color: 'white',
        borderWidth: 1,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  left: {
    title: 'NOPE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: AppColorPallete.light.overlayLabelCardSwiperSkipped,
        color: AppColorPallete.light.overlayLabelCardSwiperSkipped,
        borderWidth: 4,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30,
      },
    },
  },
  right: {
    title: 'LIKE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: AppColorPallete.light.overlayLabelCardSwiperLiked,
        color: AppColorPallete.light.overlayLabelCardSwiperLiked,
        borderWidth: 4,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30,
      },
    },
  },
  top: {
    title: 'SUPER LIKE',
    style: {
      label: {
        backgroundColor: 'transparent',
        borderColor: AppColorPallete.light.overlayLabelCardSwiperSuperLike,
        color: AppColorPallete.light.overlayLabelCardSwiperSuperLike,
        borderWidth: 4,
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
};

export const SWIPE_TYPE = {
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
};

class CardSwiper extends PureComponent {
  onSwiped = (type, index) => {
    console.tron.log(`on Swiped ${type} - ${index}`);
    this.props.onSwiped(type, index);
  };

  render() {
    const {
      containerStyle,
      dataSource,
      cardIndex,
      renderCard,
      overlayLabels = OVERLAY_LABELS_OBJ,
    } = this.props;
    return (
      <Swiper
        ref={swiper => {
          this.swiper = swiper;
        }}
        containerStyle={containerStyle}
        onSwiped={index => this.onSwiped('general', index)}
        onSwipedLeft={index => this.onSwiped('left', index)}
        onSwipedRight={index => this.onSwiped('right', index)}
        onSwipedTop={index => this.onSwiped('top', index)}
        onSwipedBottom={index => this.onSwiped('bottom', index)}
        onTapCard={this.swipeLeft}
        cards={dataSource}
        cardIndex={cardIndex}
        renderCard={renderCard}
        stackSize={STACK_SIZE}
        stackSeparation={STACK_SEPERATION}
        overlayLabels={overlayLabels}
        animateOverlayLabelsOpacity
        animateCardOpacity
        disableBottomSwipe
      />
    );
  }
}

export default CardSwiper;
