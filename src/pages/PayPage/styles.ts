import CustomStyleSheet from "styles";

export default CustomStyleSheet.create({
  containerWrapper: {
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  addressWrapper: {
    flexDirection: 'row',
  },

  addressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },

  infoWrapper: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  headerWrapper: {
    marginHorizontal: 12,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: { 
    flex: 1, 
    alignItems: 'center' ,
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
  },

  payWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconText: {
    marginLeft: 2,
    color: '#000',
  },

  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 2,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },

  bottomText: {
    fontSize: 10,
    color: '#000',
    lineHeight: 16,
  },
  
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: -2,
    height: 20,
  },

  priceCurrency: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 16,
    color: '#ff502f',
  },
  
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff502f',
    lineHeight: 20,
  },

  payBtn: {
    marginHorizontal: 8,
    paddingHorizontal: 28,
    paddingVertical: 12,
    backgroundColor: '#23a2ff',
    borderRadius: 24,
    color: '#fff',
    fontSize: 12
  }
});
