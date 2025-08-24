import {ExternalLinkIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useState} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';
import Modal from '../Modal';

const Portfolio: FC = memo(() => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const handleOpenModal = (item: PortfolioItem) => {
    setActiveItem(item);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveItem(null);
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                    'cursor-pointer',
                  )}
                  onClick={() => handleOpenModal(item)}
                  tabIndex={0}
                  role="button"
                  onKeyPress={e => (e.key === 'Enter' ? handleOpenModal(item) : undefined)}
                  aria-label={`Open details for ${title}`}
                >
                  <Image alt={title} layout="responsive" placeholder="blur" src={image} />
                </div>
              </div>
            );
          })}
        </div>
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          {activeItem && (
            <div className="flex flex-col items-center gap-y-4">
              <div className="w-full flex justify-center">
                <div className="relative w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-lg overflow-hidden">
                  <Image
                    alt={activeItem.title}
                    src={activeItem.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold text-white text-center">{activeItem.title}</h2>
              <p className="text-sm text-neutral-200 text-center">{activeItem.description}</p>
              <a
                href={activeItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-x-2 rounded bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Visit Project <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          )}
        </Modal>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
