import CustomStyleSheet from "styles";

export default CustomStyleSheet.create({
  container: { 
    gap: 16 
  },
  distribution: { 
    flexDirection: 'row', 
    marginHorizontal: 8, 
    paddingVertical: 12, 
    borderRadius: 8, 
    backgroundColor: '#f7f7f7' 
  },
  optionWrapper: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 8 
  },
  optionText: { 
    marginLeft: -4, 
    fontSize: 10, 
    color: '#000' 
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
    flex: 1,
    marginVertical: 8, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
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
    position: 'absolute', 
    width: 60, 
    height: 60,
    borderRadius: 8, 
    backgroundColor: 'rgba(0, 0, 0, 0.05)' 
  },
  detailsWrapper: { 
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  detailsContainer: { 
    marginHorizontal: 8 
  },
  detailsRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    gap: 24,
    marginBottom: 8 
  },
  detailsTitle: { 
    color: '#000',
  },
  detailsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
  },
  detailsImage: {
    flexDirection: 'row',
    gap: 10,
  },
  detailsText: {
    flex: 1, 
    marginRight: 4,
    textAlign: 'right',
    color: '#000',
    lineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
