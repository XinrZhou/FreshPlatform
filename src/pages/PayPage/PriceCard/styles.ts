import CustomStyleSheet from "styles";

export default CustomStyleSheet.create({
  container: { 
    gap: 16 
  },
  product: { 
    marginHorizontal: 8 
  },
  headerWrapper: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  contentWrapper: { 
    marginVertical: 8, 
    flexDirection: 'row', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    gap: 8 
  },
  title: { 
    color: '#000' 
  },
  titleBold: { 
    fontWeight: '600' 
  },
  logo: { 
    width: 80, 
    height: 16 
  },
  imageWrapper: { 
    position: 'relative' 
  },
  image: { 
    width: 60, 
    height: 60, 
    borderRadius: 8 
  },
  imageOverlay: { 
    ...CustomStyleSheet.absoluteFillObject, 
    borderRadius: 8, 
    backgroundColor: 'rgba(0, 0, 0, 0.05)' 
  },
  detailsWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 'auto' 
  },
  detailsContainer: { 
    marginHorizontal: 8 
  },
  detailsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 8 
  },
  detailsTitle: { 
    color: '#000' 
  },
  detailsContent: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  detailsText: { 
    marginRight: 4, 
    color: '#000' 
  },
  priceContainer: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    marginRight: 8
  },
  priceText: { 
    color: '#000' 
  },
  priceBold: { 
    fontWeight: '600' 
  },
});
